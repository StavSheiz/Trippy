const http = require('http')
const fs = require('fs')
const hostname = '192.168.43.244';
const port = 3000;
var index = require('./Routing/index')
var express = require('express')
var app = express()
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', index)

http.createServer({
  // key: fs.readFileSync(__dirname + '/server.key'),
  // cert: fs.readFileSync(__dirname + '/server.cert')
}, app).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});