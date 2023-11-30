const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('./Signupschema');

const app = express();
const port = 3002;

const username = encodeURIComponent("sheikaalam");
const password = encodeURIComponent("sheikaalam@87619");

// Connect to MongoDB Atlas (replace YOUR_CONNECTION_STRING with your actual connection string)
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.ucjuwvu.mongodb.net/`);

// Enable CORS
app.use(cors());
app.use(bodyParser.json());

// Define routes and handle database operations

// Endpoint for user registration (moved within the same scope)
app.post('/signup', async (req, res) => {
    
  try {
    const { firstName, lastName, email, phone, password, userType } = req.body;

    // Create a new user instance
    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      password,
      userType,
    });

    // Save the user to the database
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


app.post('/login', async (req, res) => {
  try {
    const { firstName, lastName, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ firstName, lastName, password });

    if (user) {
      // User exists, send a success response
      res.status(200).json({ message: 'Login successful', user });
    } else {
      // User not found, send an error response
      res.status(404).json({ message: 'User not found or incorrect password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});












// Start the server
app.listen(port, () => {
  console.log("Connection successful");
  console.log(`Server is running on port ${port}`);
});
