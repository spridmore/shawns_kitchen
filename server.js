const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const debug = require('debug');
const compression = require('compression');
const models = require('./server/models');

require('dotenv').load()

var user = require('./server/routes/user');
var shoppingList = require('./server/routes/shoppingList');
var searchHistory = require('./server/routes/searchHistory');
var reviews = require('./server/routes/reviews');
var recipes = require('./server/routes/recipes');

var app = express();
app.use(compression())

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app')));

console.log("dirname: ", __dirname);
function debugReq(req, res, next) {
  debug('params:', req.params);
  debug('query:', req.query);
  debug('body:', req.body);
  next();
}
app.use(debugReq);

app.use('/users', user);
app.use('/shoppinglists', shoppingList);
app.use('/searchHistory', searchHistory);
app.use('/reviews', reviews);
app.use('/recipes', recipes);

models.sequelize
  .authenticate()
  .then(function () {
    console.log('Connection successful');
  })
  .catch(function(error) {
    console.log("Error creating connection:", error);
  });


module.exports = app;
