'use strict';
module.exports = function(sequelize, DataTypes) {
  var ShoppingList = sequelize.define('ShoppingList', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
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
