// npm install mysql

// Database Info
/*
    HOST: localhost/127.0.0.1/192.168.0.101
    PORT: 3306
    USER: root
    PASS: ''
    DB: test
    TABLE: persons (pid*, name, address)
*/

// var mysql = require('mysql');
import mysql from 'mysql';

// Connect with database server

/*
var conn = mysql.createConnection({host: "localhost", user: "root", password: ""});
// var conn = mysql.createConnection({host: "localhost", user: "root", password: "", database:'test'});
conn.connect(function(err) {
    if (!err) {
        console.log("Connected!");
    }
    else{
        throw err;
    }    
});
//insert, update, select, delete
conn.end(function(err) {
  if (err) {
    return console.log('error:' + err.message);
  }
  console.log('Close the database connection.');
});
*/

// Note: 
    // connection.destroy();

// Connection pool
/*
var pool = mysql.createPool({connectionLimit: 5, host: 'localhost', user: 'root', password: '', database: 'test'});
pool.getConnection(function(err, connection) {
    // execute query
    // ...
    connnection.release();
});
pool.end(function(err) {
    if (err) {
      return console.log(err.message);
    }
    // close all connections
});
*/

// Display all the databases of server
/*
var conn = mysql.createConnection({host: "localhost", user: "root",  password: "",  database: "test"});
conn.connect(function(err) {
    if (err) throw err;
    conn.query("show databases", function (err, result, fields) {
      if (!err){
        console.log(result);
      } 
      else{
        throw err;
      }            
    });
});
*/

// Create new database
/*
var conn = mysql.createConnection({host: "localhost", user: "root",  password: "",  database: "test"});
conn.connect(function(err) {
    if (err) throw err;
    conn.query("create database dbnode", function (err, result, fields) {
      if (!err){
        console.log(result);
      } 
      else{
        throw err;
      }            
    });
});
*/

// Drop database
/*
var conn = mysql.createConnection({host: "localhost", user: "root",  password: "",  database: "test"});
conn.connect(function(err) {
    if (err) throw err;
    conn.query("drop database dbnode", function (err, result, fields) {
      if (!err){
        console.log(result);
      } 
      else{
        throw err;
      }            
    });
});
*/

// Creating new table
/*
let sql = `CREATE TABLE IF NOT EXISTS persons(
    pid int primary key,
    name varchar(50) not null,
    address varchar(50) not null
)`;

var conn = mysql.createConnection({host: "localhost", user: "root",  password: "",  database: "test"});
conn.connect(function(err) {
    if (err) throw err;
    conn.query(sql, function (err, result, fields) {
      if (!err){
        console.log(result);
      } 
      else{
        throw err;
      }            
    });
});
*/

// Inserting new record
let sql = `INSERT INTO persons(pid, name, address) VALUES(?)`;
let values = [1, 'Raj Rai', 'Kathmandu'];
var conn = mysql.createConnection({host: "localhost", user: "root",  password: "",  database: "test"});
conn.connect(function(err) {
    if (err) throw err;
    conn.query(sql, [values], function (err, result) {
      if (!err){
        console.log(result.affectedRows);
      } 
      else{
        throw err;
      }            
    });
});

// Display All Records
/*
let sql = `SELECT * FROM persons`;
var conn = mysql.createConnection({host: "localhost", user: "root",  password: "",  database: "test"});
conn.connect(function(err) {
    if (err) throw err;
    conn.query(sql, function (err, result) {
      if (!err){
        console.log(result);
      } 
      else{
        throw err;
      }            
    });
});
*/

// Search Records
/*
let sql = `SELECT * FROM persons WHERE pid=?`;
let values = [10,];
var conn = mysql.createConnection({host: "localhost", user: "root",  password: "",  database: "test"});
conn.connect(function(err) {
    if (err) throw err;
    conn.query(sql, values, function (err, result) {
      if (!err){
        console.log(result);
      } 
      else{
        throw err;
      }            
    });
});
*/

//Update Record
/*
let sql = `UPDATE persons SET name=?, address=? WHERE pid=?`;
let values = ['Rita Bhatta', 'Lalitpur', 2];
var conn = mysql.createConnection({host: "localhost", user: "root",  password: "",  database: "test"});
conn.connect(function(err) {
    if (err) throw err;
    conn.query(sql, values, function (err, result) {
      if (!err){
        console.log(result.affectedRows);
      } 
      else{
        throw err;
      }            
    });
});
*/

// Delete record
/*
let sql = `DELETE FROM persons WHERE pid=?`;
let values = [2,];
var conn = mysql.createConnection({host: "localhost", user: "root",  password: "",  database: "test"});
conn.connect(function(err) {
    if (err) throw err;
    conn.query(sql, values, function (err, result) {
      if (!err){
        console.log(result.affectedRows);
      } 
      else{
        throw err;
      }            
    });
});
*/