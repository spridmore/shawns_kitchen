'use strict';

module.exports = function (sequelize, DataTypes) {
  const user = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    is_admin: DataTypes.BOOLEAN
  },
    {
      underscored: true
  });
  
  //user.hasMany('')
  // user.associate = function (models) {
  //   this.belongsToMany(models.user_recipe, 
  //     { through: 'user_recipe', as: 'recipe'},
  //     { onDelete: "Cascade" })
  // };
  // user.associate = function (models) {
  //   this.hasMany(models.review, 
  //     { onDelete: "Cascade" })
  // };
  // user.associate = function (models) {
  //   this.hasMany(models.shopping_list,
  //     { onDelete: "Cascade" })
  // };
  // user.associate = function (models) {
  //   this.hasMany(models.search_history,
  //     { onDelete: "Cascade" })
  // };

  return user;
};
