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
      ingredient_id: {
        type: Sequelize.INTEGER,
        reference: {
          model: "ingredient",
          key: "id"
        }
      },
      recipe_id: {
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
    return queryInterface.dropTable('recipe_ingredient')
  }
};
