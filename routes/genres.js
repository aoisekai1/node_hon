const express = require('express');
const router = express.Router();
const dir = require('../hooks/directory_link');

router.get('/', (req, res) => {
  res.render(dir.Genres);
  // res.send('Hello');
});

module.exports = router;