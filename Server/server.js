'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 5000;

var db = require('./models');

//body parser middleware
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static('public'));
app.use('/api', require('./api'));


  app.listen(port, function () {
    console.log('Running server on ' + port);
  });
 
