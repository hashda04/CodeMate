import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) {
    // Properly return here to stop execution
    return res.status(401).json({ message: 'Access Denied. No token.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next(); // Only move on if token is valid
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token' }); // Stop here too
  }
};

export default verifyToken;
