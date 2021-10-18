'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * */
    await queryInterface.bulkInsert('Wines', [
      {
        name: 'Antico Italiano Chianti Classico',
        year: '2013',
        type: 'Сухое',
        color: 'Красное',
        country: 'Италия',
        sweet:
          'https://www.vinofan.ru/img/winegallery/medium/39/antico-italiano-chianti-classico.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Barton & Guestier Reserve Chardonnay',
        year: '2010',
        type: 'Сухое',
        color: 'Белое',
        country: 'Франция',
        sweet:
          'https://www.vinofan.ru/img/winegallery/medium/12/b_g_merlot_2011.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: ' Baron de Valls Blanc ',
        year: '2016',
        type: 'Полусухое',
        color: 'Белое',
        country: 'Испания',
        sweet:
          'https://www.vinofan.ru/img/winegallery/medium/61/baron-de-valls-blanc.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Vina Belje Grasevina',
        year: '2011',
        type: 'Сухое',
        color: 'Белое',
        country: 'Хорватия',
        sweet:
          'https://www.vinofan.ru/img/winegallery/medium/79/vina-belje-grasevina.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Casillero del Diablo Carmenere Reserva',
        year: '2011',
        type: 'Сухое',
        color: 'Красное',
        country: 'Чили',
        sweet:
          'https://www.vinofan.ru/img/winegallery/original/73/CasilleroDiabloBrut.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
