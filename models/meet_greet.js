'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meet_greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band}) {
      // define association here
      // Band
      meet_greet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })
    }
  }
  meet_greet.init({
    event_id: DataTypes.INTEGER,
    band_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'meet_greet',
  });
  return meet_greet;
};