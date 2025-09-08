import express from 'express';
import mongoose from 'mongoose';
import { authenticateToken, AuthRequest } from '../middleware/auth';
import { Message, Conversation } from '../models/Message';

const router = express.Router();

// Get user conversations
router.get('/conversations', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const conversations = await Conversation.find({
      participants: req.user!._id,
      isActive: true
    })
      .populate('participants', 'firstName lastName profileImage')
      .populate('lastMessage')
      .populate('service', 'title images')
      .sort({ updatedAt: -1 });

    res.json(conversations);
  } catch (error) {
    console.error('Get conversations error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get messages for a conversation
router.get('/conversations/:conversationId', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const conversation = await Conversation.findOne({
      _id: req.params.conversationId,
      participants: req.user!._id
    });

    if (!conversation) {
      return res.status(404).json({ error: 'Conversation not found' });
    }

    const messages = await Message.find({ conversation: req.params.conversationId })
      .populate('sender', 'firstName lastName profileImage')
      .sort({ createdAt: 1 });

    // Mark messages as read
    await Message.updateMany(
      { 
        conversation: req.params.conversationId,
        sender: { $ne: req.user!._id },
        isRead: false
      },
      { isRead: true }
    );

    res.json(messages);
  } catch (error) {
    console.error('Get messages error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start or get existing conversation
router.post('/conversations', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { participantId, serviceId } = req.body;

    // Check if conversation already exists
    let conversation = await Conversation.findOne({
      participants: { $all: [req.user!._id, participantId] },
      service: serviceId || null
    });

    if (!conversation) {
      conversation = new Conversation({
        participants: [req.user!._id, participantId],
        service: serviceId
      });
      await conversation.save();
    }

    const populatedConversation = await Conversation.findById(conversation._id)
      .populate('participants', 'firstName lastName profileImage')
      .populate('service', 'title images');

    res.json(populatedConversation);
  } catch (error) {
    console.error('Create conversation error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Send message
router.post('/conversations/:conversationId/messages', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { content, attachments } = req.body;

    const conversation = await Conversation.findOne({
      _id: req.params.conversationId,
      participants: req.user!._id
    });

    if (!conversation) {
      return res.status(404).json({ error: 'Conversation not found' });
    }

    const message = new Message({
      conversation: req.params.conversationId,
      sender: req.user!._id,
      content,
      attachments: attachments || []
    });

    await message.save();

    // Update conversation last message
    conversation.lastMessage = message._id as mongoose.Types.ObjectId;
    conversation.updatedAt = new Date();
    await conversation.save();

    const populatedMessage = await Message.findById(message._id)
      .populate('sender', 'firstName lastName profileImage');

    res.status(201).json(populatedMessage);
  } catch (error) {
    console.error('Send message error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;