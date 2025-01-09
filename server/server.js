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
    console.log('Connected to MongoDB Atlas');
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

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
