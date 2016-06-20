'use strict';

//  models/post.js  -  Post model

const db = require('../config/db');

const uuid = require('uuid');
const moment = require('moment');

db.run(`create table if not exists posts(
  id TEXT,
  createdAt TEXT,
  text TEXT,
  score INT
)`);

exports.getAll = () => {
  return new Promise(function(resolve, reject) {
    db.all('select * from posts', function(err, posts) {
      if(err) {
        reject(err);
      } else {
        resolve(posts);
      }
    });
  });
};

exports.create = postObj => {
  return new Promise(function(resolve, reject) {
    db.run('insert into posts values (?,?,?,?)',
      uuid(),
      moment().toISOString(),
      postObj.text,
      0,
      function(err) {
        if(err) {
          reject(err);
        } else {
          resolve();
        }
      }
    )
  });
};

