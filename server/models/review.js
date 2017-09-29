'use strict';
module.exports = function(sequelize, DataTypes) {
  var review = sequelize.define('review', {
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
    recipe_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  });

  review.associate = function (models) {
    this.belongsToMany(models.user, { 
      onDelete: "Cascade"
    });
  };

  review.associate = function (models) {
    this.belongsToMany(models.recipe, { 
      onDelete: "Cascade"
    });
  };
  return review;
};
