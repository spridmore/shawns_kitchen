'use strict';
module.exports = function (sequelize, DataTypes) {
  var ShoppingList = sequelize.define('ShoppingList', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    listName: DataTypes.STRING,
    userId: DataTypes.INTEGER
  });

  ShoppingList.associate = function (models) {
    ShoppingList.belongsTo(models.User,
      { onDelete: 'cascade' });
  };

  ShoppingList.associate = function (models) {
    ShoppingList.belongsToMany(models.Recipe,
      { through: 'RecipeShoppingList', foreignKey: 'shoppingListId' },
      { onDelete: 'Cascade' })
  };

  return ShoppingList;
};
