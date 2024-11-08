const mongoose = require('mongoose');
require('dotenv').config(); // Ensure dotenv is loaded at the top

console.log('MongoDB URI:', process.env.MONGO_URI); // Debug line to check the URI

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit the app with failure
  }
};

module.exports = connectDB;
