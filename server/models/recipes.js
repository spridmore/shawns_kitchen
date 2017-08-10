'use strict';
module.exports = function(sequelize, DataTypes) {
  const Recipes = sequelize.define('Recipes', {
    id:{ 
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    servings: DataTypes.INTEGER
  });

    Recipes.associate = function(models) {
        // associations can be defined here
      }
    

  return Recipes;
};