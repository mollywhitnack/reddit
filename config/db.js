'use strict';

//  config/db.js  -  Database configuration

/*const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dataPath = path.join(__dirname, '../data/data.db');

const db = new sqlite3.Database(dataPath);

module.exports = db;*/

//console.log("pwd: ", process.env.MYSQL_PASSWORD);

//mysql://z51m9zayj3u3lp48:adv2bbko1gxyhfuv@q3vtafztappqbpzn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/rp5hows08ccpqioq

const mysql = require('mysql');

let db  = mysql.createConnection(process.env.JAWSDB_URL ||
{
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'testdb'
});

db.connect();

//db.query('create database if not exists testdb')

module.exports = db;