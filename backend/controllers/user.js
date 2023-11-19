const User =require("../models/user.js") ;
const { emailRegex, passwordRegex } =  require("../utils/regexUtils.js");
const bcrypt = require("bcrypt");7
const jwt = require('jsonwebtoken');

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

     
    
    const activeUser = await User.findOne({ email });


    if (activeUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message: "password has to include at least 1 uppercase and 1 digit", 
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters long.",
      });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email address.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const cookieOptions = {
        httpOnly : true,
        expires : new Date(Date.now() + 5 * 24 * 60 *60 *1000 ) 
    } 

    const result = await newUser.save();

    const token = jwt.sign({ userId: result._id}, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

    if (result) {
      res.status(201).cookie("token" ,token ,cookieOptions).json({ message: "User registered successfully" , result , token });
    } else {
      res.status(400).json({ message: "User couldnt registered" });
    }
  } catch (error) {
    console.log("register error hapened", error);
  }
};

export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user by email
      const user = await User.findOne({ email });
  
      // Check if the user exists
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Compare the entered password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Generate a JWT token
      const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
  
      // Send the token in the response
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
