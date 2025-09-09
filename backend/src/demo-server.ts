import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import { createServer } from 'http';

// Import only AI builder routes for demo
import aiBuilderRoutes from './routes/ai-builder-demo';

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({
  origin: "http://localhost:3001",
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mock auth middleware for demo - allow all requests
const mockAuth = (req: any, res: any, next: any) => {
  req.user = { id: 'demo-user', email: 'demo@example.com' };
  next();
};

// Direct routes without auth middleware for demo
app.use('/api/ai-builder', aiBuilderRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'AI Builder Demo Server' });
});

// Socket.io for real-time messaging
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start server without MongoDB
server.listen(PORT, () => {
  console.log(`Demo server running on port ${PORT}`);
  console.log('Note: This is a demo server for AI Builder functionality');
});

export default app;