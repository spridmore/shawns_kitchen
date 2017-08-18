'use strict';
module.exports = function (sequelize, DataTypes) {
var Ingredient = sequelize.define('Ingredient', {
  name: DataTypes.STRING,
  quantity: DataTypes.INTEGER,
});
Ingredient.associate = function (models) {};
return Ingredient;
};