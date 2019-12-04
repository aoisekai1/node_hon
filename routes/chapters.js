const express = require('express');
const router = express.Router();
const directory = require('../hooks/directory_link');

router.get('/', (req, res) => {
  res.render(directory.Chapters);
  // res.send('Hello');
});

router.get('/add', (req, res) => {
  res.render(direction.chapterAdd);
})

module.exports = router;