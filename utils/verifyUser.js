import jwt from 'jsonwebtoken';
export const VerifyUser = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(403).json({ error: 'Not allowed' });
    }
    const JwtVerify = jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ error: 'forbidden' });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    console.log(error);
  }
};
