'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('recipe_shopping_list', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      recipeId: {
        type: Sequelize.INTEGER,
        reference: {
          model: "recipe",
          key: "id"
        }
      },
      shoppingListId: {
        type: Sequelize.INTEGER,
        reference: {
          model: "shopping_list",
          key: "id"
        }
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('recipe_shopping_list')
  }
};
