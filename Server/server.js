'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const Sequelize = require('sequelize');
var cors = require('cors');
var port = process.env.PORT || 5000;

var db = require('./models');

// const sequelize = new Sequelize('bookingonline', 'root', "", {
//   host: 'localhost',
//   dialect: 'mysql',
//   operatorsAliases: false,

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// app.use(cors());

//body parser middleware
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static('public'));
app.use('/api', require('./api'));

db.sequelize.sync().then(function(){
  app.listen(port, function () {
  console.log('Running server on ' + port);
});
})
