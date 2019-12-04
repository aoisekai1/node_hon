function pad(number) {
  return number < 10 ? "0" + number : number;
}

exports.consoleLog = (tag, params) => {
  return console.log(tag, " ==> ", params);
}

exports.dateFormat = (currDate) => {
  let date;
  
  if(currDate !== ""){
    date = new Date(currDate);
  }else{
    date = new Date();
  }

  let Y = date.getFullYear();
  let m = pad(date.getMonth());
  let d = pad(date.getDate());
  let dateFormat;

  //check if isnan
  if (isNaN(Y) || isNaN(m) || isNaN(d)) {
    dateFormat = "0000-00-00";
  } else {
    //sort format date by "Y-m-d"
    dateFormat = Y + "-" + m + "-" + d;
  }

  return dateFormat; 
}

exports.timeFormat = (currDate) => {
  let date;
  
  if (currDate !== "") {
    date = new Date(currDate);
  } else {
    date = new Date();
  }

  let H = pad(date.getHours());
  let i = pad(date.getMinutes());
  let s = pad(date.getSeconds());

  //sort format date by "H:i:s"
  let timeFormat = H + ":" + i + ":" + s;

  return timeFormat;
}

exports.checkPad = (num) => {
  return num < 10 ? "0"+num : num;
}

exports.fetchValue = (data) => {
  let json = JSON.stringify(data);
  let cjson = json.substring(1, json.length - 1);
  let row = JSON.parse(cjson);
  // console.log(row);
  return row;
}