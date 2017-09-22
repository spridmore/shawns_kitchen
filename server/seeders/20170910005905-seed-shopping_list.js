'use strict';

var dt = new Date();
var utcDate = dt.toUTCString();

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("shopping_lists", [
      {
        id: 1,
        listName: "Shawn's Saved Recipes",
        user_id: 1,
        created_at: utcDate,
        updated_at: utcDate,
      },
      {
        id: 2,
        listName: "John's Saved Recipes",
        user_id: 2,
        created_at: utcDate,
        updated_at: utcDate,
      },
      {
        id: 3,
        listName: "Bill's Saved Recipes",
        user_id: 2,
        created_at: utcDate,
        updated_at: utcDate,
      }
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
