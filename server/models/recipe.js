'use strict';
module.exports = function (sequelize, Sequelize) {
  var Recipe = sequelize.define('Recipe', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: Sequelize.STRING,
    servings: Sequelize.INTEGER,
  });

  Recipe.associate = function (models) {
    this.belongsTo(models.Ingredient,
      { through: 'RecipeIngredient', foreignKey: 'recipeId' }),
      { onDelete: 'Cascade'}
  };

  Recipe.associate = function (models) {
    this.belongsTo(models.User,
      { through: 'UserRecipe', foreignKey: 'recipeId' }),
      { onDelete: 'Cascade'}
  };

  Recipe.associate = function (models) {
    this.belongsTo(models.ShoppingList,
      { through: 'RecipeShoppingList', foreignKey: 'recipeId' }),
      { onDelete: 'Cascade'}
  };

  Recipe.associate = function(models) {
    this.hasMany(models.Review,
      { onDelete: 'Cascade' }
    )
  }

  return Recipe;
};
