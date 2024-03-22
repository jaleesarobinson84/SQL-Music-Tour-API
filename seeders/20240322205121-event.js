'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('events', [
      { name: 'TechSpark Summit', start: new Date('2024-04-02 09:00:00'), end: new Date('2024-04-06 21:55:00') , createdAt:new Date(), updatedAt: new Date() },
      { name: 'Groove Gala Music Festival', start: new Date('2024-08-27 11:30:00'), end: new Date('2024-09-15 23:55:00'), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Beats Bash Summer Jam', start: new Date('2024-07-02 10:45:00'), end: new Date('2024-04-06 22:50:00'), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mashup Jam Fest', start: new Date('2025-06-02 11:30:42'), end: new Date('2024-06-11 23:30:00'), createdAt: new Date(), updatedAt: new Date() },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('events', null, {});
  }
};
