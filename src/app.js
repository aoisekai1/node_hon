const hbs = require('express-hbs');
const path = require('path');
const express = require('express');

const app = express();
const pathDirectoryPublic = path.join(__dirname, '../public/');
const pathDirectory = path.join(__dirname, '../views/web/');
const layoutDir = path.join(__dirname, '../pages/views/admin/layouts/');

app.set('view engine', 'hbs');
app.engine('hbs', hbs.express4({
  extname: '.hbs',
  defaultLayout: pathDirectory + "layouts/main-layout",
  partialsDir: pathDirectory + "partials"
}));

const operator = require('../config/operator');

//Lang
const lang = require('../hooks/lang/en');
// hbs.registerHelper('lang', function (key) {
//   return lang[key];
// });

//helpers
const hooks = require('../hooks/helpers/helpers');
/*
* Global Variabel
* use @root when you use each on tempalate
* example @root.lang.btn.btnEdit
*/  
app.locals.lang = lang;
// app.locals.hooks = hooks;

//Pages
const index = require('../routes/index');
const posts = require('../routes/posts');
const genres = require('../routes/genres');
const settings = require('../routes/settings');

// console.log("HELLO => " + pathDirectoryPublic);
app.set('views', pathDirectory);
app.use(express.static(pathDirectoryPublic));
// app.use(operator);

app.use('/', index);
app.use('/posts', posts);
app.use('/genres', genres);
app.use('/settings', settings);

// const { exec } = require('child_process');
// app.get('/', function(req, res){
//   exec('touch ~/Documents/learn-maman/testing.txt', (err, stdout, stderr) => {
//     if (err) {
//       // node couldn't execute the command
//       return;
//     }

//     // the *entire* stdout and stderr (buffered)
//     // console.log(`stdout: ${stdout}`);
//     console.log(`stderr: ${stdout}`);

//     res.send(stdout);
//   });
// });

// Catch error 404
app.use(function(req, res, next) {
  res.status(404).render('error/error');
});

// SET RUNNING PORT
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), () => {
  console.log('Server running on port '+app.get('port'));
});