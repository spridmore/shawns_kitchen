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

  return user;
};
