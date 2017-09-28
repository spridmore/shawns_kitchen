'use strict';
module.exports = function (sequelize, Sequelize) {
  var recipe = sequelize.define('recipe', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: Sequelize.STRING,
    servings: Sequelize.INTEGER,
  });

  recipe.associate = function (models) {
    this.belongsTo(models.ingredient, 
      { through: 'recipe_ingredient', foreignKey:'recipe_id' }),
      { onDelete: 'Cascade'}
  };

  recipe.associate = function (models) {
    this.belongsTo(models.user, 
      { through: 'user_recipe', foreignKey:'recipe_id' }),
      { onDelete: 'Cascade'}
  };
  
  recipe.associate = function (models) {
    this.belongsTo(models.shopping_list, 
      { through: 'recipe_shopping_list', foreignKey:'recipe_id' }),
      { onDelete: 'Cascade'}
  };

  recipe.associate = function(models) {
    this.hasMany(models.review,
      { onDelete: 'Cascade' }
    )
  }


  return recipe;
};
