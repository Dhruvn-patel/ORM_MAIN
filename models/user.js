'use strict';
const {
  Model
} = require('sequelize');
const db = require('../models')
const UserContact = db.UserContact
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Contact, { foreignKey: 'user_id' })

      User.belongsToMany(models.Project, {
        through: 'UserProject',
      })
    }
  }
  User.init({
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    hooks: {
      beforeValidate: (user, options) => {
        user.FirstName = 'piyush';
      },
      afterValidate: (user, options) => {
        user.username = 'Raj';
      }
    },
    sequelize,
    modelName: 'User',
  },
  );

  User.removeHook();
  return User;
};