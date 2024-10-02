//imports
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
//instances
const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
//routes
import userRouter from './routes/user.js';
import { ConnectDB } from './db.js';

// server
const port = process.env.PORT || 4000;

app.use('/api/v1/user', userRouter);

const Start = async () => {
  try {
    await ConnectDB(process.env.MONGO_URI);
    console.log('connected to db');
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log('error connecting to the server');
  }
};

Start();
