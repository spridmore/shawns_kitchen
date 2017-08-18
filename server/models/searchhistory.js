'use strict';
module.exports = function(sequelize, DataTypes) {
  var SearchHistory = sequelize.define('SearchHistory', {
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

  SearchHistory.associate = function(models) {
    // associations can be defined here
  };

  return SearchHistory;
};
