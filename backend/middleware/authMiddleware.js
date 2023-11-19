const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.header('Authorization');
  
    // Check if the request has a valid token
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid token' });
      }
      req.user = user;
      next();
    });
  };
  
  module.exports = authenticate;