'use strict';
var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var app = express();

var cors = require('cors');

app.use(cors());
app.use(compression());

//body parser middleware
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static('public'));

app.use('/api', require('./api'));


app.listen(process.env.PORT,function () {
  console.log('Running server on ' + process.env.PORT);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
