import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';
import session from 'express-session';
import passport from 'passport';

import './config/passport.js'; // 🧠 Important to include `.js` in ES modules

import authRoutes from './routes/auth.js';
import protectedRoutes from './routes/protected.js';
import profileRoutes from './routes/profile.js';
import matchRoutes from './routes/match.js';
import chatRoutes from './routes/chat.js';
import projectRoutes from './routes/project.js';
import taskRoutes from './routes/task.js';
import notificationRoutes from './routes/notification.js';
import Message from './models/Message.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/match', matchRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/notifications', notificationRoutes);

app.get('/', (req, res) => {
  res.send('CodeMate backend is running!');
});

// Create HTTP server for Socket.IO
const server = http.createServer(app);

// Socket.IO Setup
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);

  socket.on('sendMessage', async ({ senderId, receiverId, text }) => {
    try {
      const message = await Message.create({ senderId, receiverId, text });
      io.emit('receiveMessage', message);
    } catch (err) {
      console.error('Message save failed:', err.message);
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// MongoDB + Start Server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`✅ CodeMate backend running on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));
