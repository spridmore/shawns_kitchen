'use strict';
module.exports = function (sequelize, DataTypes) {
  var shoppingList = sequelize.define('shoppingList', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    listName: DataTypes.STRING,
    userId: DataTypes.INTEGER
  });

  return shoppingList;
};
