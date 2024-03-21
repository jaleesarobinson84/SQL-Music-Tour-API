'use strict';
const {
  Model, Deferrable
} = require('sequelize');

const Stage = require('./stage')
const Band = require('./band')
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Event, Stage, stage_event}) {
      // define association here
      Event.belongsToMany(Stage, {
        foreignKey: "event_id",
        as: "stages",
        through: stage_event
      })
    }
  }
  Event.init({
  stage: {
    type: DataTypes.INTEGER,
    reference: {
      model: Stage,
      // rference to another model
      key: 'id',
      // with PostgresSQL, optionally possible to declare
      deferrable: Deferrable.INITIALLY_IMMEDIATE
      // immediately check for foreign keys
    } 
  },
    band: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};