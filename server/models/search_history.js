'use strict';
module.exports = function(sequelize, DataTypes) {
  const searchHistory = sequelize.define('searchHistory', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    userId: DataTypes.INTEGER
  });

  return searchHistory;
};
