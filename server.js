require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db'); // Import the connection function
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Your route imports here
// e.g., const taskRoutes = require('./src/routes/taskRoutes');
// app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
