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
    await queryInterface.bulkInsert('stages', [
      { name: 'Proscenium', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Flexible', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Traverse', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Platform', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hippodromes', createdAt: new Date(), updatedAt: new Date() },
     
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('stages', null, {});
  }
};
