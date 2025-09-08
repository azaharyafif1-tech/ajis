import express, { Request, Response } from 'express';
import Order from '../models/Order';
import Gig from '../models/Gig';
import { authenticate, AuthRequest } from '../middleware/auth';

const router = express.Router();

// Create new order
router.post('/', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const { gigId, package: packageType, requirements, paymentMethod } = req.body;
    const buyerId = req.user._id;

    // Get gig details
    const gig = await Gig.findById(gigId).populate('seller');
    if (!gig) {
      return res.status(404).json({ message: 'Gig tidak dijumpai' });
    }

    // Prevent self-ordering
    if ((gig.seller as any)._id.toString() === buyerId.toString()) {
      return res.status(400).json({ message: 'Anda tidak boleh memesan gig sendiri' });
    }

    // Get package details
    const packageDetails = gig.packages[packageType as keyof typeof gig.packages];
    if (!packageDetails) {
      return res.status(400).json({ message: 'Pakej tidak sah' });
    }

    // Calculate expected delivery
    const expectedDelivery = new Date();
    expectedDelivery.setDate(expectedDelivery.getDate() + packageDetails.deliveryTime);

    // Create order
    const order = new Order({
      gig: gigId,
      seller: (gig.seller as any)._id,
      buyer: buyerId,
      package: packageType,
      requirements,
      payment: {
        amount: packageDetails.price,
        currency: 'MYR',
        method: paymentMethod,
        status: 'pending'
      },
      expectedDelivery
    });

    await order.save();

    const populatedOrder = await Order.findById(order._id)
      .populate('gig', 'title images')
      .populate('seller', 'username fullName avatar')
      .populate('buyer', 'username fullName avatar');

    res.status(201).json({
      message: 'Pesanan berjaya dicipta',
      order: populatedOrder
    });
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ message: 'Ralat pelayan dalaman' });
  }
});

// Get user orders (as buyer or seller)
router.get('/', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user._id;
    const { role = 'buyer', status, page = 1, limit = 10 } = req.query;

    const query: any = {};
    if (role === 'buyer') {
      query.buyer = userId;
    } else if (role === 'seller') {
      query.seller = userId;
    }

    if (status) {
      query.status = status;
    }

    const orders = await Order.find(query)
      .populate('gig', 'title images category')
      .populate('seller', 'username fullName avatar rating')
      .populate('buyer', 'username fullName avatar')
      .sort({ createdAt: -1 })
      .limit(Number(limit) * Number(page))
      .skip((Number(page) - 1) * Number(limit));

    const total = await Order.countDocuments(query);

    res.json({
      orders,
      pagination: {
        currentPage: Number(page),
        totalPages: Math.ceil(total / Number(limit)),
        totalOrders: total
      }
    });
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).json({ message: 'Ralat pelayan dalaman' });
  }
});

// Get single order
router.get('/:id', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user._id;
    const order = await Order.findOne({
      _id: req.params.id,
      $or: [{ buyer: userId }, { seller: userId }]
    })
      .populate('gig', 'title description images category packages')
      .populate('seller', 'username fullName avatar rating location')
      .populate('buyer', 'username fullName avatar location');

    if (!order) {
      return res.status(404).json({ message: 'Pesanan tidak dijumpai' });
    }

    res.json({ order });
  } catch (error) {
    console.error('Get order error:', error);
    res.status(500).json({ message: 'Ralat pelayan dalaman' });
  }
});

// Update order status (seller only)
router.put('/:id/status', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user._id;
    const { status } = req.body;

    const order = await Order.findOne({
      _id: req.params.id,
      seller: userId
    });

    if (!order) {
      return res.status(404).json({ message: 'Pesanan tidak dijumpai atau anda tidak mempunyai kebenaran' });
    }

    order.status = status;
    if (status === 'completed') {
      order.completedAt = new Date();
    }

    await order.save();

    res.json({
      message: 'Status pesanan berjaya dikemaskini',
      order
    });
  } catch (error) {
    console.error('Update order status error:', error);
    res.status(500).json({ message: 'Ralat pelayan dalaman' });
  }
});

// Deliver work (seller only)
router.put('/:id/deliver', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user._id;
    const { message, files } = req.body;

    const order = await Order.findOne({
      _id: req.params.id,
      seller: userId,
      status: 'active'
    });

    if (!order) {
      return res.status(404).json({ message: 'Pesanan tidak dijumpai atau tidak boleh dihantar' });
    }

    order.deliveredWork = {
      message,
      files: files || [],
      deliveredAt: new Date()
    };
    order.status = 'delivered';

    await order.save();

    res.json({
      message: 'Kerja berjaya dihantar',
      order
    });
  } catch (error) {
    console.error('Deliver work error:', error);
    res.status(500).json({ message: 'Ralat pelayan dalaman' });
  }
});

export default router;