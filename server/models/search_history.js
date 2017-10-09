'use strict';
module.exports = function(sequelize, DataTypes) {
  var search_history = sequelize.define('search_history', {
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

  search_history.associate = function(models) {
    this.belongsToMany(models.user, {
      onDelete: 'Cascade'
    });
  };

  return search_history;
};
