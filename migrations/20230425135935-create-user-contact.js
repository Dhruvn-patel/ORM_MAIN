'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserContacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          as: "UserId",
        },
      },
      ContactId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Contacts",
          key: "id",
          as: "ContactId",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    // await queryInterface.removeColumn('id')
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserContacts');
  }
};