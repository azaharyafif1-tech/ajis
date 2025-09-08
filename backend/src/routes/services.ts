import express from 'express';
import { authenticateToken, AuthRequest, optionalAuth } from '../middleware/auth';
import Service from '../models/Service';

const router = express.Router();

// Get all services with pagination and filters
router.get('/', optionalAuth, async (req: AuthRequest, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 12;
    const category = req.query.category as string;
    const search = req.query.search as string;
    const sortBy = req.query.sortBy as string || 'createdAt';
    const sortOrder = req.query.sortOrder === 'asc' ? 1 : -1;

    const skip = (page - 1) * limit;

    // Build query
    const query: any = { isActive: true };
    
    if (category) {
      query.category = category;
    }
    
    if (search) {
      query.$or = [
        { 'title.en': { $regex: search, $options: 'i' } },
        { 'title.ms': { $regex: search, $options: 'i' } },
        { 'description.en': { $regex: search, $options: 'i' } },
        { 'description.ms': { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ];
    }

    const services = await Service.find(query)
      .populate('seller', 'firstName lastName rating reviewCount profileImage')
      .populate('category', 'name icon')
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(limit);

    const total = await Service.countDocuments(query);

    res.json({
      services,
      pagination: {
        current: page,
        total: Math.ceil(total / limit),
        count: services.length,
        totalServices: total
      }
    });
  } catch (error) {
    console.error('Get services error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get service by ID
router.get('/:id', optionalAuth, async (req: AuthRequest, res) => {
  try {
    const service = await Service.findById(req.params.id)
      .populate('seller', 'firstName lastName rating reviewCount profileImage bio location')
      .populate('category', 'name icon');

    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }

    res.json(service);
  } catch (error) {
    console.error('Get service error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create new service
router.post('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const serviceData = {
      ...req.body,
      seller: req.user!._id
    };

    const service = new Service(serviceData);
    await service.save();

    const populatedService = await Service.findById(service._id)
      .populate('seller', 'firstName lastName rating reviewCount')
      .populate('category', 'name icon');

    res.status(201).json({
      message: 'Service created successfully',
      service: populatedService
    });
  } catch (error) {
    console.error('Create service error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update service
router.put('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const service = await Service.findOne({ _id: req.params.id, seller: req.user!._id });
    
    if (!service) {
      return res.status(404).json({ error: 'Service not found or not authorized' });
    }

    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
      .populate('seller', 'firstName lastName rating reviewCount')
      .populate('category', 'name icon');

    res.json({
      message: 'Service updated successfully',
      service: updatedService
    });
  } catch (error) {
    console.error('Update service error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete service
router.delete('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const service = await Service.findOne({ _id: req.params.id, seller: req.user!._id });
    
    if (!service) {
      return res.status(404).json({ error: 'Service not found or not authorized' });
    }

    await Service.findByIdAndUpdate(req.params.id, { isActive: false });

    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Delete service error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;