'use strict';
module.exports = (sequelize, DataTypes) => {
  var hotels = sequelize.define('hotels', {
    hotelName: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    address: DataTypes.STRING,
    rating: DataTypes.DOUBLE,
    reviews: DataTypes.INTEGER
  }, {});
  hotels.associate = function(models) {
    // associations can be defined here
  };
  return hotels;
};