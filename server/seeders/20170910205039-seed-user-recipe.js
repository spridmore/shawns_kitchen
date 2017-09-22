'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('user_recipe', [
     {
       userId: 1,
       recipeId: 1
     },
     {
      userId: 1,
      recipeId: 2
    },
    {
      userId: 1,
      recipeId: 3
    },
    {
      userId: 2,
      recipeId: 1
    },
    {
      userId: 3,
      recipeId: 1
    },
    {
      userId: 3,
      recipeId: 3
    },
   ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
