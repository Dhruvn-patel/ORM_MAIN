'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FirstName: {
        type: Sequelize.STRING
      },
      LastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
      //'1', 'piyush', 'Panchal', 'Panchal@gmail.com', '2023-04-27 13:08:34', '2023-04-27 13:08:34'

      {
        hooks: {
          beforeCreate: (record, options) => {
            record.dataValues.createdAt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/g, '');
            record.dataValues.updatedAt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/g, '');
          },
          beforeUpdate: (record, options) => {
            record.dataValues.updatedAt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/g, '');
          }
        }
      }

    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};