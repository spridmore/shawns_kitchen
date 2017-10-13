'use strict';
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  },
    {
      underscored: true
  });

  User.associate = function (models) {
    this.belongsToMany(models.Recipe,
      { through: 'UserRecipe', as: 'recipe'},
      { onDelete: "Cascade" })
  };

  User.associate = function (models) {
    this.hasMany(models.Review,
      { onDelete: "Cascade" })
  };

  User.associate = function (models) {
    this.hasMany(models.ShoppingList,
      { onDelete: "Cascade" })
  };

  User.associate = function (models) {
    this.hasMany(models.SearchHistory,
      { onDelete: "Cascade" })
  };

  return User;
};
