require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth'); // Import your authentication routes
const noteRoutes = require('./routes/notes'); // Import your notes routes

const app = express();

// Middleware
app.use(cors()); // Enable CORS to allow requests from the frontend
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/auth', authRoutes); // Authentication routes
app.use('/notes', noteRoutes); // Notes routes

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Error handling for undefined routes
app.use((req, res, next) => {
  res.status(404).send('Route not found');
});

// Error handling for server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
