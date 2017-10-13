'use strict';
module.exports = function (sequelize, DataTypes) {
  var Ingredient = sequelize.define('Ingredient', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
  });

  Ingredient.associate = function (models) {
    this.belongsTo(models.recipe,
      { through: 'RecipeIngredient', foreignKey: 'ingredientId' }),
      { onDelete: 'Cascade'}
  };

  return Ingredient;
};
