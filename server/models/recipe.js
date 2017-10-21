'use strict';
module.exports = function (sequelize, DataTypes) {
  var recipe = sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    servings: DataTypes.INTEGER,
  },
    {
      underscored: true
  }
  );

  // recipe.associate = function (models) {
  //   this.belongsTo(models.ingredient, 
  //     { through: 'recipe_ingredient', foreignKey:'recipe_id' }),
  //     { onDelete: 'Cascade'}
  // };

  // recipe.associate = function (models) {
  //   this.belongsTo(models.user, 
  //     { through: 'user_recipe', foreignKey:'recipe_id' }),
  //     { onDelete: 'Cascade'}
  // };
  
  // recipe.associate = function (models) {
  //   this.belongsTo(models.shopping_list, 
  //     { through: 'recipe_shopping_list', foreignKey:'recipe_id' }),
  //     { onDelete: 'Cascade'}
  // };

  // recipe.associate = function(models) {
  //   this.hasMany(models.review,
  //     { onDelete: 'Cascade' }
  //   )
  // }


  return recipe;
};
