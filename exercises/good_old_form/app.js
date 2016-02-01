'use strict';

// GOOD OLD FORM
// Exercise 4 of 8

// Write a route ('/form') that processes HTML form input
// (<form><input name="str"/></form>) and prints backwards the str value.

const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();
const port = process.argv[2];

// Handle x-www-form-urlencoded data
app.use(bodyparser.urlencoded({ extended: false }));

app.post('/form', (req, res) => {
  res.end(req.body.str.split('').reverse().join(''));
});

app.listen(port);