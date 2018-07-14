'use strict';
module.exports = (sequelize, DataTypes) => {
  var NICs = sequelize.define('NICs', {
    name: DataTypes.STRING,
    nicNo: DataTypes.INTEGER
  }, {});
  NICs.associate = function(models) {
    // associations can be defined here
  };
  return NICs;
};