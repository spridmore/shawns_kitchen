'use strict';
module.exports = function (sequelize, DataTypes) {
  var ingredient = sequelize.define('ingredient', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
  });

  ingredient.associate = function (models) {
    this.belongsTo(models.recipe, 
      { through: 'recipe_ingredient', foreignKey:'ingredient_id' }),
      { onDelete: 'Cascade'}
  };

  return ingredient;
};
