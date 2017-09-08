'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('recipe_ingredient', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ingredientId: {
        type: Sequelize.INTEGER,
        reference: {
          model: "ingredient",
          key: "id"
        }
      },
      recipeId: {
        type: Sequelize.INTEGER,
        reference: {
          model: "recipe",
          key: "id"
        }
      },
      quantity: {
        type: Sequelize.INTEGER,        
      },
      measurement: {
        type: Sequelize.TEXT,
      },
      measurementShort: {
        type: Sequelize.TEXT,        
      },
      measurementLong: {
        type: Sequelize.TEXT,                
      }

    });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
