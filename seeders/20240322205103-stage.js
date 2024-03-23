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
      { id:'6', name: 'Proscenium', createdAt: new Date(), updatedAt: new Date() },
      { id:'7', name: 'Flexible', createdAt: new Date(), updatedAt: new Date() },
      { id:'8', name: 'Traverse', createdAt: new Date(), updatedAt: new Date() },
      { id:'9', name: 'Platform', createdAt: new Date(), updatedAt: new Date() },
      { id:'10',name: 'Hippodromes', createdAt: new Date(), updatedAt: new Date() },
     
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
