'use strict';
const {
  Model
} = require('sequelize');
const db = require('../models')
const UserContacts = db.UserContact
module.exports = (sequelize, DataTypes) => {
  class UserContact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      // UserContact.belongsTo(models.Contact, {
      //   // through: "table",
      //   foreignKey: 'ContactId',
      // })
      // UserContact.belongsTo(models.User, {
      //   foreignKey: 'UserId',
      //   // through: "table",
      // })
    }
  }
  UserContact.init({
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
        as: "UserId",
      },
    },
    ContactId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Contacts",
        key: "id",
        as: "ContactId",
      },
    },
  }, {
    sequelize,
    modelName: 'UserContact',
  });
  return UserContact;
};