'use strict';

//  models/post.js  -  Post model

const db = require('../config/db');

const uuid = require('uuid');
const moment = require('moment');

db.query(`create table if not exists posts(
  id TEXT,
  createdAt TEXT,
  text TEXT,
  score INT
)`);

exports.getAll = () => {
  return new Promise(function(resolve, reject) {
    db.query('select * from posts', function(err, posts) {
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
    postObj.id = uuid();
    postObj.createdAt = moment().toIOString();
    postObj.score() = 0

    db.query('insert into posts set ?', postObj,
      function(err) {
        if(err) return reject(err);

        db.query('select * from posts order by createdAt desc limit 1', function(err, post) {
          if(err) return reject(err);
          console.log("post: ", post);

          resolve(post[0]);
        });
      }
    )
  });
};

