import { User } from '../models/user.js';

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.create({ username, email, password });
  res.status(201).json(user);
};
