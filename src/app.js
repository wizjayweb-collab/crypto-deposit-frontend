// src/app.js (frontend only)
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static frontend
app.use(express.static(path.join(__dirname, '../public')));

// Fallback (ONLY for frontend routes)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Frontend running on port ${PORT}`);
});
