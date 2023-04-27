'use strict';
const {
  Model
} = require('sequelize');
const db = require('../models')
const UserContact = db.UserContact
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contact.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });

      // Contact.belongsToMany(models.User, {
      //   through: 'UserContact',
      // })

    }
  }
  Contact.init({
    address: DataTypes.STRING,
    contactNumber: DataTypes.INTEGER,
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "Users",
    //     key: "id"
    //   },
    //   onDelete: 'SET NULL',
    // }
  }, {
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};