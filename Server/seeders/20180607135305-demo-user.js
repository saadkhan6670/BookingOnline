'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'demo@demo.com'
      },{
        firstName: 'mAHIN',
        lastName: 'Doe',
        email: 'demo@demo.com'
      },
      {
        firstName: 'SAAD',
        lastName: 'Doe',
        email: 'demo@demo.com'
      },
      
    ],
       {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};