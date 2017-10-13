'use strict';
module.exports = function (sequelize, DataTypes) {
  var RecipeShoppingList = sequelize.define('RecipeShoppingList', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    recipeId: DataTypes.INTEGER,
    shoppingListId: DataTypes.INTEGER
  });

  return RecipeShoppingList;
};
