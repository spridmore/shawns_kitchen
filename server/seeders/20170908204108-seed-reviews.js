'use strict';

var dt = new Date();
var currentTimestamp = dt.toUTCString();

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('reviews',[
      {
        title: "Fluffernutter review: Yums in tums",
        description: "i ate all of it",
        rating: 9,
        user_id: 1,
        recipe_id: 0,
        created_at: currentTimestamp,
        updated_at: currentTimestamp, 
      },
      {
        title: "Cereal description: Chex out",
        description: "d lish us",
        rating: 8,
        user_id: 1,
        recipe_id: 1,
        created_at: currentTimestamp,
        updated_at: currentTimestamp,
      },
      {
        title: "Chex is good",
        description: "just call me a serial killer of this killer cereal",
        rating: 10,
        user_id: 2,
        recipe_id: 1,
        created_at: currentTimestamp,
        updated_at: currentTimestamp,
      },
      {
        title: "Mystery meat",
        description: "stupid",
        rating: 2,
        user_id: 2,
        recipe_id: 2,
        created_at: currentTimestamp,
        updated_at: currentTimestamp, 
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
