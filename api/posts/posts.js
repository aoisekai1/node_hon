const express = require('express');
const bodyParse = require('body-parser');

const app = express();
const router = express.Router();

const model = require('../../models/postModel');

router.get('/posts', (req, res) => {
    model.getAll(function(err, data) {
        if(err){
            return res.status(404).send(err);
        }else{
            res.send({data: data});
        }
    });
});


module.exports = router;