import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import reportRoutes from './routes/reportRoutes.js';

const app = express();
const PORT = 3000;

// Database connection
mongoose.connect('mongodb://localhost:27017/inventory').then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

// CORS configuration
app.use(cors({
    origin: 'http://localhost:5000' // Allow requests from your frontend
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/reports', reportRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
