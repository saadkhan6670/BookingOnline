'use strict';
module.exports = (sequelize, DataTypes) => {
  var bookHotels = sequelize.define('bookHotels', {
    nic_id: DataTypes.INTEGER,
    hotel_id: DataTypes.INTEGER,
    book_from: DataTypes.STRING,
    book_to: DataTypes.STRING
  }) 
  bookHotels.associate = function (models) {
    bookHotels.belongsTo(sequelize.models.NICs, {foreignKey: 'nic_id'});
    bookHotels.belongsTo(sequelize.models.hotels, {foreignKey: 'hotel_id'});
  }; 
  return bookHotels;
};