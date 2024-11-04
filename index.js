import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import userRouter from './routes/user.js';
const app = express();
app.use(express.json());

app.use('/api/v1/users', userRouter);

app.listen(3000, async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('connected to db');
  console.log('server connected.');
});
