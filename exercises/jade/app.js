'use strict';

// JADE
// Exercise 3 of 8
//
// Create an Express.js app with a home page rendered by Jade template engine.
//
// The homepage should respond to /home.
//
// The view should show the current date using toDateString.

const express = require("express");
const path = require("path");
const app = express();
const port = process.argv[2];

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'templates'));

app.get('/home', (req, res) => {
  // Serve our own jade file
  res.render('index', { date: new Date().toDateString() });
});

app.listen(port);