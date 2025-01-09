const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables

const app = express();
app.use(express.json());

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

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  // Check if all fields are provided
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields (username, email, password) are required.' });
  }

  try {
    // Check if the email already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Create a new user instance
    const newUser = new userModel({
      username,
      email,
      password,
    });

    // Save the new user to the database
    await newUser.save();

    // Return success response
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
