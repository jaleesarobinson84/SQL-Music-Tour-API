'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    
    await queryInterface.addColumn('stage_events', 'event_id', {type: Sequelize.INTEGER})
  
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stage_events', 'event_id', {type: Sequelize.INTEGER})
  }
};
