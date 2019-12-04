const express = require('express');
const app = express();
const router = express.Router();
const bodyParse = require('body-parser');

//Directory
const dir = require('../hooks/directory_link');

//Hooks
const hooks = require('../hooks/hooks');

//Helpers
const helpers = require('../hooks/helpers/helpers');

//Create json parse
var jsonparse = bodyParse.json();

//create application
var urlCodeParse = bodyParse.urlencoded({extended:false});

//Model Post
const model = require('../models/postModel');

const TAG = "POSTS";
router.get('/', (req, res) => {
  let params = {all: '', status: '', search: ''};
  model.getAll(function(err, data) {
    if(err){
      return res.status(404).send(err);
    }else{
      model.countAll(params, (err, countData) => {
        if(err){
          return res.status(404).send(err);
        }else{
          res.render(dir.Posts, {
            data: data,
            count: countData
          });
        }
      });
    }
  });
});

router.get('/status/:status', function(req, res) {
  let params = { all: '', status: req.params.status, search: ''};
  model.findOne(params,(err, data) => {
    if(err){
      return res.status(404).send('error');
    } else {
      model.countAll(params, (err, countData) => {
        if (err) {
          return res.status(404).send(err);
        } else {
          res.render(dir.Posts, {
            data: data,
            count: countData
          });
        }
      });
    }
  });
});

router.post('/search', urlCodeParse, (req, res) => {
  let params = {all: '', status: '', search: req.body.search}
  model.findMany(params, function(err, data) {
    if(err){
      return res.status(404).send(err);
    }else{
      model.countAll(params, (err, countData) => {
        if(err){
          return res.status(404).send(err);
        }else{
          res.render(dir.Posts, { 
            data: data,
            count: countData 
          });    
        }
      });
    }

  });
  // console.log(params);
})

router.get('/create-new-post', (req, res) => {
  res.render('pages/posts/formInput', {data: '', form: 'add'});
});

router.post('/create-new-post', urlCodeParse, (req, res) => {
  const params = req.body;
  if(params){
    model.insertOne(params, function(err, data) {
      if(err){
        return res.status(404).send('Error');
      }
      res.render(dir.PostAdd);
    });
  }else{
    res.redirect(`/posts/create-new-post`);
  }
});

router.get('/edit/:id', (req, res) => {
  const params = { code: req.params.id};
  model.findOne(params, function(err, data) {
    let row = hooks.fetchValue(data);
    if(err){
      return res.status(404).send('Error');
    }
    res.render('pages/posts/formInput', {data:row, form: 'edit'});
    hooks.consoleLog(TAG, row);
  });
});

router.post('/update/:id', urlCodeParse, (req, res) => {
  const id = req.params.id;
  const params = req.body;
  model.updateOne(params, id, function(err, data){
    if(err){
      return res.status(404).send('Error');
    }else{
      res.redirect(`/posts/`);
    }
  });

});

router.get('/delete-post/:id', (req, res) => {
  const params = req.params.id;
  model.deleteOne(params, function(err, data) {
    if(err){
      return res.status(404).send('Error');
    }
  });
  res.redirect(`/posts`);
});

module.exports = router;