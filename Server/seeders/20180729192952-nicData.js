'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('NICs', [
      {
        "name": "Farhan Ahmed",
        "nicNo": 4796215873496
      },
      {
        "name": "Faheem Abbasi",
        "nicNo": 3245678965412
      },
      {
        "name": "Badar Sami",
        "nicNo": 4259763145678
      },
      {
        "name": "Sadiq ALi Khan",
        "nicNo": 99874563214586
      },
      {
        "name": "Zohaib najam",
        "nicNo": 4598763102145
      },
    ]);

  },

  down: (queryInterface, Sequelize) => {

  }
};
