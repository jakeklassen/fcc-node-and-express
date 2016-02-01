'use strict';

// WHAT'S IN QUERY
// Exercise 7 of 8

// Write a route that extracts data from query string in the GET '/search' URL
// route, e.g. ?results=recent&include_tabs=true and then outputs it back to
// the user in JSON format.

const express = require("express");
const app = express();
const port = process.argv[2];

app.get('/search', (req, res) => {
  // Send back as JSON
  res.json(req.query);
});

app.listen(port);