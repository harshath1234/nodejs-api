// index.js
const express = require('express');
const app = express();
const port = 3000;

// Define the /status endpoint
app.get('/status', (req, res) => {
  res.json({ status: 'API is running smoothly!' });
});

// Start the server
app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});

