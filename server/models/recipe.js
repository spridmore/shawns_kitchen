'use strict';
module.exports = function (sequelize, DataTypes) {
  var Recipe = sequelize.define('Recipe', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    servings: DataTypes.INTEGER,
  });

  Recipe.associate = function (models){
    Recipe.hasMany(models.Ingredient, {
      onDelete: 'cascade'
    });
  };

  Recipe.associate = function (models){
    Recipe.hasMany(models.User, {
      onDelete: 'cascade'
    });
  };
  
  
  return Recipe;
};
 