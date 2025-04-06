const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Sample route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// In server.js

// Sample data
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];
  
  // Route to get all users
  app.get('/api/users', (req, res) => {
    res.json(users);
  });
  
  // Route to get a user by ID
  app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  });
  