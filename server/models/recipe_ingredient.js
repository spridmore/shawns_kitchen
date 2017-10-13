'use strict';
module.exports = function (sequelize, DataTypes) {
    var RecipeIngredient = sequelize.define('RecipeIngredient', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        recipeId: DataTypes.INTEGER,
        ingredientId: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        measurement: DataTypes.TEXT,
        measurementShort: DataTypes.TEXT,
        measurementLong: DataTypes.TEXT,
    });

    return RecipeIngredient;
};
