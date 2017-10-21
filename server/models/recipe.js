'use strict';
module.exports = function (sequelize, DataTypes) {
  var recipe = sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    servings: DataTypes.INTEGER,
  },
    {
      underscored: true
  }
  );

  return recipe;
};
