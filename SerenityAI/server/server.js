// server.js
const express = require('express');
const app = express();
const chatRoute = require('./routes/chat');
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use('/api/chat', chatRoute);

app.get('/', (req, res) => {
  res.send('SerenityAI Backend Running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
