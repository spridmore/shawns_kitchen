'use strict';
module.exports = function (sequelize, DataTypes) {
    var recipe_ingredient = sequelize.define('recipe_ingredient', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        recipe_id: DataTypes.INTEGER,
        ingredient_id: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        measurement: DataTypes.TEXT,
        measurementShort: DataTypes.TEXT,
        measurementLong: DataTypes.TEXT,
    });

    return recipe_ingredient;
};
