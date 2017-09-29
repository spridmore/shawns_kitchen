'use strict';
module.exports = function (sequelize, DataTypes) {
  var shopping_list = sequelize.define('shopping_list', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    listName: DataTypes.STRING,
    userId: DataTypes.INTEGER
  });

  shopping_list.associate = function (models) {
    shopping_list.belongsToMany(models.user,
      { onDelete: 'cascade' });
  };
  shopping_list.associate = function (models) {
    shopping_list.belongsToMany(models.recipe,
      { through: 'recipe_shopping_list' },
      { onDelete: 'Cascade' })
  };

  return shopping_list;
};
