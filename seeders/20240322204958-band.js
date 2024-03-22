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
    await queryInterface.bulkInsert('bands', [
      { name: 'Black Keys', genre: 'Garbage Rock', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Black Sabbath', genre: 'Heavy Metal', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Wu-Tang Clan', genre: 'Hip Hop', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pink Floyd', genre: 'Progressive Rock', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Living Colour', genre: 'Rock', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Linkin Park', genre: 'Alternative Rock', createdAt: new Date(), updatedAt: new Date() },
      { name: 'AC/DC', genre: 'Rock', createdAt: new Date(), updatedAt: new Date() },
      { name: 'The Lox', genre: 'Hip Hop', createdAt: new Date(), updatedAt: new Date() },
      { name: '112', genre: 'R&B', createdAt: new Date(), updatedAt: new Date() },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Bands', {});
  }
};
