'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ConnectCollUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  ConnectCollUser.init({
    userId: DataTypes.INTEGER,
    collectionId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ConnectCollUser',
  });
  return ConnectCollUser;
};
