'use strict';
module.exports = function (sequelize, DataTypes) {
  var ShoppingList = sequelize.define('user_recipe', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    recipeId: DateTypes.INTEGER,
    userId: DataTypes.INTEGER
  });
  
  return user_recipe;
};
