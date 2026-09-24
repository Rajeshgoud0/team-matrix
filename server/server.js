require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
let dbConnected = false;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/janyojana-portal';
    
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    dbConnected = true;
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    dbConnected = false;
    console.warn('⚠️ MongoDB not available. Starting in demo mode without database connection.');
    console.warn(error.message);
  }
};

// Routes (to be implemented)
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Server is running',
    dbConnected,
    timestamp: new Date().toISOString()
  });
});

// Placeholder routes - implement these later
app.use('/api/schemes', require('./routes/schemes'));
app.use('/api/applications', require('./routes/applications'));
app.use('/api/eligibility', require('./routes/eligibility'));
app.use('/api/documents', require('./routes/documents'));
app.use('/api/auth', require('./routes/auth'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : ''
  });
});

// Connect to database and start server
const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 JanYojana Portal Server running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
  if (!dbConnected) {
    console.log('ℹ️ Demo mode enabled: API routes are available without MongoDB.');
  }
});

module.exports = app;
