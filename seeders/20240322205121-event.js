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
      { id: '1', stage: 'Proscenium', band:'Black Keys' },
      { id: '2', stage: 'Flexible', band:'Living Colour' },
      { id: '3', stage: 'Traverse', band:'The Lox'},
      { id: '4', stage: 'Hippodromes', band:'Black Sabbath' },
      { id: '5', stage: 'Platform', band:'112'},
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
