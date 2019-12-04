const express = require('express');
const app = express();

//Hooks
const hooks = require('../hooks/hooks');

//Config mysql
const conn = require('../config/databases');

let sqlAll = `SELECT * FROM posts`;

const TAG = "MODEL";

exports.getAll = (done) => {
  conn.query(sqlAll + ` ORDER BY id DESC`, (err, row) => {
    if(err){
      return done(err, null)
    }

    done(null, row);
  })
}

exports.findOne = (params = [], done) => {
  let sqlFindOne;
  if(params.code !== ''){
    sqlFindOne = sqlAll + ` WHERE code = '${params.code}'`;
  }
  if(params.status){
    sqlFindOne = sqlAll + ` WHERE status = '${params.status}'`;
  }
  conn.query(sqlFindOne, (err, row) => {
    if(err){
      return done(err, null);
    }
    done(null, row);
  })
}

exports.findMany = (params = [], done) => {
  conn.query(sqlAll + ` WHERE title LIKE '%${params.search}%' ORDER BY id DESC`, (err, row) => {
    if (err) {
      return done(err, null);
    }
    done(null, row);
  })
}

exports.insertOne = (params=[], done) => {
  let create_at = hooks.dateFormat("")+" "+hooks.timeFormat("");
  let sqlInsert = `INSERT INTO posts(code, title, description, status, create_at) VALUES('${params.code}', '${params.title}', '${params.description}', '${params.status}', '${create_at}')`;
  conn.query(sqlInsert, (err, row) => {
    if(err){
      return done(err, null);
    }

    done(null, row);
  });
  // console.log(params.title);
}

exports.updateOne = (params=[], id, done) => {
  let create_at = hooks.dateFormat("") + " " + hooks.timeFormat("");
  hooks.consoleLog(TAG, params);
  let sqlUpdate = `UPDATE posts SET title='${params.title}', description='${params.description}', status = '${params.status}', create_at = '${params.create_at}' WHERE code = '${id}'`;
  conn.query(sqlUpdate, (err, row) => {
    if(err){
      return done(err, null);
    }

    done(null, row);
  });
}

exports.deleteOne = (id, done) => {
  let sqlDelete = `DELETE FROM posts WHERE id = ${id}`;
  conn.query(sqlDelete, (err, row) => {
    if(err){
      return done(err, null);
    }

    done(null, row);
  });
  console.log("PARAMS "+id);
}

exports.countAll = (params=[],done) => {
  let sqlCount;
  if(params.all === ''){
    sqlCount = `SELECT count(*) as countAll FROM posts`;
  }

  if(params.status !==''){
    sqlCount = `SELECT count(status) as countAll FROM posts WHERE status = '${params.status}'`;
  }

  if(params.search !== ''){
    sqlCount = `SELECT count(title) as countAll FROM posts WHERE title LIKE '%${params.search}%'`;
  }
  
  conn.query(sqlCount, (err, row) => {
    if(err){
      return done(err, null);
    }

    done(null, row[0].countAll);
    // console.log(row[0].countAll);
  });
}
