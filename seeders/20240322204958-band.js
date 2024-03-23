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
      { name: 'Black Keys', genre: 'Garbage Rock' },
      { name: 'Black Sabbath', genre: 'Heavy Metal' },
      { name: 'Wu-Tang Clan', genre: 'Hip Hop' },
      { name: 'Pink Floyd', genre: 'Progressive Rock' },
      { name: 'Living Colour', genre: 'Rock' },
      { name: 'Linkin Park', genre: 'Alternative Rock' },
      { name: 'AC/DC', genre: 'Rock' },
      { name: 'The Lox', genre: 'Hip Hop' },
      { name: '112', genre: 'R&B' },
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
