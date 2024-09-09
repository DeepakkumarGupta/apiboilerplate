import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: './.env' });

const app = express();
const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI as string;
console.log('MongoDB URI:', process.env.MONGO_URI);

// Middleware
app.use(express.json());

mongoose.connect(mongoUri).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Error connecting to MongoDB:', error);
});

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, API is working with dotenv!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
