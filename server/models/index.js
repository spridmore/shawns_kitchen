'use strict';
var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + './../../config/config.js')[env];
var db        = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user     = require('./user');
db.review   = require('./review');
db.recipe   = require('./recipe');
db.searchHistory = require('./search_history');
db.ingredients = require('./ingredient');
db.shoppingList = require('./shopping_list');
db.recipe_ingredient = require('./recipe_ingredient');
db.recipe_shoppingList = require('./recipe_shopping_list');
db.user_recipe = require('./user_recipe');


//Create a Sequelize connection to the database using the URL in config/config.js
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.url, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

// Object.keys(db).forEach(function(modelName) {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

//associations
db.user.hasMany(db.review);
db.review.belongsTo(db.user);

db.user.hasMany(db.searchHistory);
db.searchHistory.belongsTo(db.user);

db.user.hasMany(db.shoppingList);
db.shoppingList.belongsTo(db.user);

db.recipes.hasMany(db.reviews);
db.reviews.belongsTo(db.recipes);

db.user_recipe.hasMany(db.user);
db.user_recipe.hasMany(db.recipe)
db.user.belongsTo(db.user_recipe);
db.recipe.belongsTo(db.user_recipe);

module.exports = db;
