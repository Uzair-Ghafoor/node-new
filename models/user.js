import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: String,
    password: String,
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
