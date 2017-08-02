'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    is_admin: DataTypes.BOOLEAN
  },
  {
    underscored: true
  });

  // User.associate = function(models) {
  //   this.hasMany(models.Something, {
  //     onDelete: 'cascade'
  //   });
  // };

  return User;
};
