'use strict';
module.exports = function(sequelize, DataTypes) {
  var SearchHistory = sequelize.define('SearchHistory', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return SearchHistory;
};