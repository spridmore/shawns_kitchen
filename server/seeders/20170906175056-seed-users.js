'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   return queryInterface.bulkInsert("Users", [{
     first_name: "Shawn",
     email: "shawnsEmail@yahoo.com",
     password: "password"
   },
  {
    first_name: "John",
    email: "johnsEmail@yahoo.com",
    password: "wordpass"
  },{
    first_name: "Bill",
    email: "billsEmail@yahoo.com",
    password: "pordwass"
  }])
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
