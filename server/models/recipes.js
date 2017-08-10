'use strict';
module.exports = function(sequelize, DataTypes) {
  var Recipes = sequelize.define('Recipes', {
    id: DataTypes.integer,
    name: DataTypes.STRING,
    servings: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Recipes;
};