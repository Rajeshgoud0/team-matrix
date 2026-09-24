const express = require('express');
const router = express.Router();

// POST check eligibility
router.post('/check', (req, res) => {
  res.json({ message: 'Check eligibility - to be implemented' });
});

module.exports = router;
