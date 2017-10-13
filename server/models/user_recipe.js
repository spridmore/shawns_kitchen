'use strict';
module.exports = function (sequelize, DataTypes) {
  var UserRecipe = sequelize.define('UserRecipe', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    recipeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  });

  return UserRecipe;
};
