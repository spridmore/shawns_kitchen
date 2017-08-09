'use strict';
module.exports = function(sequelize, DataTypes) {
  var ShoppingList = sequelize.define('ShoppingList', {
    id: DataTypes.INTEGER,
    listName: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ShoppingList;
};