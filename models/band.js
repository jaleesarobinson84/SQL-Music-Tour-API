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
    static associate({ MeetGreet }) {
      // define association here
      // meet and greets
      Band.hasMany(MeetGreet, {
        foreignKey: "band_id",
        as: "meet_greet"
      })
  }
}
Band.init({

  name: { 
      type: DataTypes.STRING, 
      allowNull: false 
  },
  genre: { 
      type: DataTypes.TEXT, 
      allowNull: false 
  },

}, {
  sequelize,
  modelName: 'Band',
  tableName: 'bands',
  timestamps: false
}) 
return Band
}
