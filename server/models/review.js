'use strict';
module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define('Review', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    date: DataTypes.DATE,
    recipeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  });

  Review.associate = function (models) {
    this.belongsToMany(models.User, {
      onDelete: "Cascade"
    });
  };

  Review.associate = function (models) {
    this.belongsToMany(models.Recipe, {
      onDelete: "Cascade"
    });
  };

  return Review;
};
