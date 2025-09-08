import express, { Request, Response } from 'express';
import User from '../models/User';
import { generateToken } from '../utils/jwt';
import { authenticate, AuthRequest } from '../middleware/auth';

const router = express.Router();

// Register
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { username, email, password, fullName, location, languages, isFreelancer } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(400).json({
        message: 'Pengguna dengan email atau nama pengguna ini sudah wujud'
      });
    }

    // Create new user
    const user = new User({
      username,
      email,
      password,
      fullName,
      location,
      languages: languages || ['Bahasa Malaysia'],
      isFreelancer: isFreelancer || false
    });

    await user.save();

    // Generate token
    const token = generateToken(user);

    res.status(201).json({
      message: 'Pendaftaran berjaya',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        isFreelancer: user.isFreelancer,
        location: user.location,
        languages: user.languages
      }
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ message: 'Ralat pelayan dalaman' });
  }
});

// Login
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Email atau kata laluan tidak sah' });
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Email atau kata laluan tidak sah' });
    }

    // Generate token
    const token = generateToken(user);

    res.json({
      message: 'Log masuk berjaya',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        isFreelancer: user.isFreelancer,
        location: user.location,
        languages: user.languages,
        avatar: user.avatar,
        rating: user.rating
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Ralat pelayan dalaman' });
  }
});

// Get current user
router.get('/me', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const user = req.user;
    res.json({
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        isFreelancer: user.isFreelancer,
        location: user.location,
        languages: user.languages,
        avatar: user.avatar,
        description: user.description,
        skills: user.skills,
        rating: user.rating,
        completedOrders: user.completedOrders,
        joinedAt: user.joinedAt
      }
    });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ message: 'Ralat pelayan dalaman' });
  }
});

export default router;