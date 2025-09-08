import express, { Request, Response } from 'express';
import Gig from '../models/Gig';
import { authenticate, AuthRequest } from '../middleware/auth';

const router = express.Router();

// Get all gigs with filtering and pagination
router.get('/', async (req: Request, res: Response) => {
  try {
    const {
      page = 1,
      limit = 12,
      category,
      subcategory,
      minPrice,
      maxPrice,
      search,
      sortBy = 'createdAt',
      order = 'desc'
    } = req.query;

    const query: any = { isActive: true };

    // Apply filters
    if (category) query.category = category;
    if (subcategory) query.subcategory = subcategory;
    if (minPrice || maxPrice) {
      query['packages.basic.price'] = {};
      if (minPrice) query['packages.basic.price'].$gte = Number(minPrice);
      if (maxPrice) query['packages.basic.price'].$lte = Number(maxPrice);
    }
    if (search) {
      query.$text = { $search: search as string };
    }

    const sortOptions: any = {};
    sortOptions[sortBy as string] = order === 'desc' ? -1 : 1;

    const gigs = await Gig.find(query)
      .populate('seller', 'username fullName avatar rating location')
      .sort(sortOptions)
      .limit(Number(limit) * Number(page))
      .skip((Number(page) - 1) * Number(limit));

    const total = await Gig.countDocuments(query);

    res.json({
      gigs,
      pagination: {
        currentPage: Number(page),
        totalPages: Math.ceil(total / Number(limit)),
        totalGigs: total,
        hasNext: Number(page) * Number(limit) < total,
        hasPrev: Number(page) > 1
      }
    });
  } catch (error) {
    console.error('Get gigs error:', error);
    res.status(500).json({ message: 'Ralat pelayan dalaman' });
  }
});

// Get single gig
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const gig = await Gig.findById(req.params.id)
      .populate('seller', 'username fullName avatar rating location description languages completedOrders joinedAt');

    if (!gig) {
      return res.status(404).json({ message: 'Gig tidak dijumpai' });
    }

    res.json({ gig });
  } catch (error) {
    console.error('Get gig error:', error);
    res.status(500).json({ message: 'Ralat pelayan dalaman' });
  }
});

// Create new gig
router.post('/', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const gigData = {
      ...req.body,
      seller: req.user._id
    };

    const gig = new Gig(gigData);
    await gig.save();

    const populatedGig = await Gig.findById(gig._id)
      .populate('seller', 'username fullName avatar rating location');

    res.status(201).json({
      message: 'Gig berjaya dicipta',
      gig: populatedGig
    });
  } catch (error) {
    console.error('Create gig error:', error);
    res.status(500).json({ message: 'Ralat pelayan dalaman' });
  }
});

// Update gig
router.put('/:id', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const gig = await Gig.findOne({
      _id: req.params.id,
      seller: req.user._id
    });

    if (!gig) {
      return res.status(404).json({ message: 'Gig tidak dijumpai atau anda tidak mempunyai kebenaran' });
    }

    Object.assign(gig, req.body);
    await gig.save();

    const updatedGig = await Gig.findById(gig._id)
      .populate('seller', 'username fullName avatar rating location');

    res.json({
      message: 'Gig berjaya dikemaskini',
      gig: updatedGig
    });
  } catch (error) {
    console.error('Update gig error:', error);
    res.status(500).json({ message: 'Ralat pelayan dalaman' });
  }
});

// Delete gig
router.delete('/:id', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const gig = await Gig.findOneAndDelete({
      _id: req.params.id,
      seller: req.user._id
    });

    if (!gig) {
      return res.status(404).json({ message: 'Gig tidak dijumpai atau anda tidak mempunyai kebenaran' });
    }

    res.json({ message: 'Gig berjaya dipadam' });
  } catch (error) {
    console.error('Delete gig error:', error);
    res.status(500).json({ message: 'Ralat pelayan dalaman' });
  }
});

export default router;