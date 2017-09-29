'use strict';

var dt = new Date();
var utcDate = dt.toUTCString();

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        first_name: "Shawn",
        email: "shawnsEmail@yahoo.com",
        password: "password",
        created_at: utcDate,
        updated_at: utcDate,
      },
      {
        first_name: "John",
        email: "johnsEmail@yahoo.com",
        password: "wordpass",
        created_at: utcDate,
        updated_at: utcDate,
      },
      {
        first_name: "Bill",
        email: "billsEmail@yahoo.com",
        password: "pordwass",
        created_at: utcDate,
        updated_at: utcDate,
      }
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTables('users')
  }
};
