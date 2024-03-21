'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ meet_greet }) {
      // define association here
      // meet and greets
      Band.hasMany(meet_greet, {
        foreignKey: "band_id",
        as: "meet_greets"
      })
  }
}
  Band.init({
    firstName: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Band',
  });
  return Band;
};