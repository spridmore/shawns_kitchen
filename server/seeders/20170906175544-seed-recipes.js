'use strict';

var dt = new Date();
var utcDate = dt.toUTCString();

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("recipes", [
      {
        name: "Fluffernutter",
        servings: 5,
        created_at: utcDate,
        updated_at: utcDate,
      },
      {
        name: "Cereal",
        servings: 2,
        created_at: utcDate,
        updated_at: utcDate,
      }, {
        name: "Food #3",
        servings: 10,
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
