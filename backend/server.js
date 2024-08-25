// backend/server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000; // Port number for the backend server

app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON requests

// Define a sample route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
