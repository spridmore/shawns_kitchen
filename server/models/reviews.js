'use strict';
module.exports = function(sequelize, DataTypes) {
  var Reviews = sequelize.define('Reviews', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    date: DataTypes.DATE,
    recipeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Reviews;
};