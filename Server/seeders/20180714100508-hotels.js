'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('hotels', [{
          hotelName: 'Sheraton Dubai Creek Hotel & Towers',
          country:'Dubai',
          rate: 2229.61,
          address: "Baniyas Street, Dubai, United Arab Emirates",
          rating:4.5,
          reviews :3565,
      },{
        hotelName: 'Raffles Dubai',
        country:'Pakistan',
        rate: 5373.58,
        address: "Sheikh Rashid Road, Wafi Mall, Bur Dubai, Dubai, United Arab Emirates",
        rating:5,
        reviews :4143,
    },{
      hotelName: 'Arabian Courtyard Hotel & Spa',
      country:'Dubai',
      rate: 1526.81,
      address: "Al Fahidi Street, Opposite Dubai Museum and Historic Bastakiya, Bur Dubai, Dubai, United Arab Emirates",
      rating:4,
      reviews :3565,
  },{
    hotelName: 'Radisson Blu Hotel, Dubai Deira Creek',
    country:'Pakistan',
    rate: 1993.49,
    address: "Baniyas Road, Dubai, United Arab Emirates",
    rating:4,
    reviews :4143,
}, ]);

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
