const express = require('express');
const router = express.Router();

// Dummy AI reply for now
router.post('/', async (req, res) => {
  const { message } = req.body;
  // Here you would call your AI/NLP service
  res.json({ reply: `You said: ${message}` });
});

module.exports = router;
