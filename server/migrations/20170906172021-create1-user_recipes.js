'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('user_recipe', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        reference: {
          model: "user",
          key: "id"
        }
      },
      recipe_id: {
        type: Sequelize.INTEGER,
        reference: {
          model: "recipe",
          key: "id"
        }
      }
    });
  },

  

  down: function (queryInterface, Sequelize) {
   return queryInterface.dropTable('user_recipe')
  }
};
