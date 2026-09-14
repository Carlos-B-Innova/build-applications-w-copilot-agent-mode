import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

mongoose
  .connect(mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Octofit Tracker backend is running' });
});

app.listen(port, () => {
  console.log(`Octofit Tracker backend listening on port ${port}`);
});
