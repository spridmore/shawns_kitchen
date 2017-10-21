'use strict';
module.exports = function (sequelize, DataTypes) {
  const review = sequelize.define('review', {
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
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
  }, {
      underscored: true
    });;

  return review;
};
