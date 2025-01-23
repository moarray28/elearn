const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token; // Extract token from the cookie

  if (!token) {
    return res.status(401).json({ message: 'Access token is missing. Please sign in.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token.' });
    }

    req.user = user; 
    next();
  });
};

module.exports = authenticateToken;