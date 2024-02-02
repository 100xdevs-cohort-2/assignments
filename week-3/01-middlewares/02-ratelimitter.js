const express = require('express');
const app = express();

const REQUEST_LIMIT = 5;
const TIME_WINDOW = 1000;

let numberOfRequestsForUser = {};
setInterval(() => {
  numberOfRequestsForUser = {};
}, TIME_WINDOW);

app.use((req, res, next) => {
  const userId = req.header('user-id');

  if (!userId) {
    return res.status(400).json({
      error: "User ID is missing"
    });
  }

  numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] || 0;

  if (numberOfRequestsForUser[userId] >= REQUEST_LIMIT) {
    return res.status(404).json({ error: 'Rate limit exceeded for the user.' });
  }
  numberOfRequestsForUser[userId]++;

  next();
});

app.get('/user', (req, res) => {
  res.status(200).json({ name: 'john' });
});

app.post('/user', (req, res) => {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;
