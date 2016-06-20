'use strict';

// routes/posts.js  -  post router

const express = require('express');
let router = express.Router();

let Post = require('../models/post');

router.get('/', (req, res) => {
  Post.getAll()
    .then(posts => {
      res.send(posts);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.post('/', (req, res) => {
  Post.create(req.body)
    .then(() => {
      res.send();
    })
    .catch(err => {
      res.status(400).send(err);
    });
});


module.exports = router;
