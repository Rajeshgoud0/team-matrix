const express = require('express');
const router = express.Router();

// GET user applications
router.get('/', (req, res) => {
  res.json({ message: 'GET user applications - to be implemented' });
});

// POST new application
router.post('/', (req, res) => {
  res.json({ message: 'Create application - to be implemented' });
});

// GET application status
router.get('/:id/status', (req, res) => {
  res.json({ message: `GET application status for ${req.params.id} - to be implemented` });
});

module.exports = router;
