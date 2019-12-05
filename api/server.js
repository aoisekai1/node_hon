const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const posts = require('../api/posts/posts');

app.use('/api', posts);

app.listen(port, () => console.log(`Server running on port ${port}`));