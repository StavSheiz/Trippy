const https = require('https')
const fs = require('fs')
const hostname = '127.0.0.1';
const port = 3000;
var index = require('./Routing/index')
var express = require('express')
var app = express()


app.use('/', index)

https.createServer({
    key: fs.readFileSync(__dirname + '/server.key'),
    cert: fs.readFileSync(__dirname + '/server.cert')
  }, app).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });




