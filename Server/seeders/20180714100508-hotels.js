'use strict';

const sample = require ("./sample")

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('hotels', sample );

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
