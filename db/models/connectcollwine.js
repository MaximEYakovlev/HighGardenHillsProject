'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ConnectCollWine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  ConnectCollWine.init({
    wineId: DataTypes.INTEGER,
    collectionId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ConnectCollWine',
  });
  return ConnectCollWine;
};
