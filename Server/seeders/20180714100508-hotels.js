'use strict';

const sample = require ("./sample")

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('hotels', sample );

  },
  
  down: function (queryInterface, Sequelize) {
  
  }
};
