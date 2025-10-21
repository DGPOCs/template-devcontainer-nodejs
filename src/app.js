const express = require('express');
const {
  getWelcomeMessage,
  updateWelcomeMessage,
} = require('./welcomeService');

const app = express();

app.use(express.json());

app.get('/api/welcome', (req, res) => {
  res.json({ message: getWelcomeMessage() });
});

app.post('/api/welcome', (req, res) => {
  const { message } = req.body || {};

  if (typeof message !== 'string' || message.trim() === '') {
    return res.status(400).json({ error: 'El campo "message" es obligatorio.' });
  }

  const updated = updateWelcomeMessage(message);
  res.json({ message: updated });
});

module.exports = app;
