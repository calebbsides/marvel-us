const express = require('express');
const path = require('path');

const router = express.Router();

router.use(express.static(path.resolve(__dirname, '..', 'build')));

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

router.get('/api', (req, res) => {
  res.send('Marvel api');
});

module.exports = router;