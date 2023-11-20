const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const authenticateMid = async (req, res, next) => {
  const token = req.cookies;

  // Check if the request has a valid token
  if (!token) {
    return res.status(401).json({ message: "login olunuz" });
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
  // Verify the token
  if (!decodedData) {
    return res.status(403).json({ message: "Invalid token" });
  }

  next();
};


const roleChecked = (...roles) =>{
    return (req,res,next) => {
        if (!roles.includes(req.User.role)) {
            return res.status(500).json({ message : "Giriş için izniniz yoktur"})
        }
        next();
    }
}

module.exports = {authenticateMid , roleChecked};
