const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/hello', (req, res) => {
    res.send({data: "Testing first api with node js and express"});
})

app.listen(port, () => console.log(`Server running on port ${port}`));