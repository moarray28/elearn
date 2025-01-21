const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables
const cors = require('cors');

const bcrypt = require('bcryptjs');
const frontend = process.env.VITE_FRONTEND_URL;

const app = express();
app.use(express.json());

app.use(cors({
  origin: frontend || '*',  // Allow requests from this origin
  methods: ["POST", "GET", "DELETE", "PUT"], // Allow these HTTP methods
  credentials: true
}));
 // Debugging step

const mongoURI = process.env.MONGO_URI;

const userModel = require('./Schema');
// Connect to MongoDB Atlas
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB Atlas :)');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Middleware
app.use(express.json());

// Example route
 
app.get('/', (req, res) => {
  res.json({ message: 'Server is running perfectly!  😊👍' });
});


app.get("/getdata", (req, res) => {
    userModel.find({})
        .then(users => {
            res.json(users);
            console.log(users);  // Return the users in JSON format
        })
        .catch(err => {
            res.json(err);  // Return error if any
        });
});


app.post('/register', async (req, res) => {
  const { username, email, password, userType } = req.body;

  if (!username || !email || !password || !userType) {
    return res.status(400).json({ message: 'All fields are required (username, email, password, userType).' });
  }

  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use.' });
    }

    const newUser = new userModel({ username, email, password, userType });
    await newUser.save();

    res.status(201).json({
      message: 'User registered successfully.',
      user: { username: newUser.username, email: newUser.email, userType: newUser.userType },
    });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

//not using body parser in the below code 


app.post('/signin', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  try {
    // Find the user by username
    const user = await userModel.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password.' });
    }

    // Compare the entered password with the hashed password in the DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password.' });
    }

    // If everything is valid, send back user data (excluding password)
    res.status(200).json({
      message: 'Sign-in successful',
      userType: user.userType,
      username: user.username,
      email: user.email,
    });

  } catch (error) {
    console.error('Error during sign-in:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
