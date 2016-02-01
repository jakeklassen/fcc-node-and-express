'use strict';

// STATIC
// Exercise 2 of 8
//
// Apply static middleware to serve index.html file without any routes.
//
// Your solution must listen on the port number supplied by process.argv[2].
//
// The index.html file is provided and usable via the path supplied by
// process.argv[3]. However, you can use your own file with this content:
//
//     <html>
//       <head>
//         <title>expressworks</title>
//         <link rel="stylesheet" type="text/css" href="/main.css"/>
//       </head>
//       <body>
//         <p>I am red!</p>
//       </body>
//     </html>

const express = require("express");
const app = express();
const port = process.argv[2];
// Use the provided path to serve a static file
const file = process.argv[3];

// Middleware
app.use(express.static(file));

app.listen(port);