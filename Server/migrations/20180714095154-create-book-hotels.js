'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bookHotels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nic_id: {
        type: Sequelize.INTEGER,
        references: { model: 'NICs', key: 'id'},
        onDelete: 'cascade',
        onUpdate: 'cascade',
        allowNull: false
      },
      hotel_id: {
        type: Sequelize.INTEGER,
        references: { model: 'hotels', key: 'id'},
        onDelete: 'cascade',
        onUpdate: 'cascade',
        allowNull: false
      },
      book_from: {
        type: Sequelize.DATE
      },
      book_to: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('bookHotels');
  }
};