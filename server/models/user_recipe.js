'use strict';
module.exports = function (sequelize, DataTypes) {
  var user_recipe = sequelize.define('user_recipe', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    recipeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  });
  
  return user_recipe;
};
