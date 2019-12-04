const hbs = require('express-hbs');
const express = require('express');

const app = express();

//Hooks
const hooks = require('../hooks');

//Lang
const lang = require('../lang/en');

app.locals.lang = lang;

const TAG = "HELPERS";
hbs.registerHelper('dateFormat', function(currDate){
  let date = new Date(currDate);
  let Y = date.getFullYear();
  let m = hooks.checkPad(date.getMonth());
  let d = hooks.checkPad(date.getDate());
  let dateFormat;
  
  //check if isnan
  if(isNaN(Y) || isNaN(m) || isNaN(d)){
    dateFormat = "0000-00-00";
  }else{
    //sort format date by "Y-m-d"
    dateFormat = Y + "-" + m + "-" + d;
  }
  
  return dateFormat;
});

hbs.registerHelper('timeFormat', function (dateTime) {
  let date = new Date(dateTime);
  let H = hooks.checkPad(date.getHours());
  let i = hooks.checkPad(date.getMinutes());
  let s = hooks.checkPad(date.getSeconds());
  
  //sort format date by "H:i:s"
  let timeFormat = H+":"+i+":"+s;

  return timeFormat;
});

hbs.registerHelper('autoCode', function(params) {
  let generateCode;
  let numRand = Math.floor((Math.random() * 100) + 1);
  if(numRand < 10 )
  {
    generateCode = params+"000"+numRand;
  }else{
    generateCode = params+"00"+numRand;
  }

  return generateCode; 
})

hbs.registerHelper('ddStatus', function (params) {
  let dData;
  if (params == 'publish'){
    dData = `
      <select class="form-control" name="status">
        <option value="unpublish" >${lang.form.unpublish}</option>
        <option value="publish" selected>${lang.form.publish}</option>
      </select>
    `;
  }else{
    dData = `
        <select class="form-control" name="status">
          <option value="unpublish" selected >${lang.form.unpublish}</option>
          <option value="publish">${lang.form.publish}</option>
        </select>
    `;
  }

  return dData;
});

hbs.registerHelper('ddShowLimits', function (params) {
  let limit = [25, 50, 100, 150];
  let select =  `<select class="" name="limit">`;
  let selectEnd = `<select>`;
  let ddata = [];
  let option;
  limit.forEach((data) => {
    option += `<option value="'${data}'" >${data}</option>`;
  });
  ddata = select + "" + option + "" + selectEnd;
  return ddata;
});

hbs.registerHelper("setVar", function (varName, varValue, id, options) {
  options.data.root[varName] = varValue+""+id;
});

module.exports = hbs;