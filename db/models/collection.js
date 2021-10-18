'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Collection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Wine }) {
      // define association here
      this.belongsTo(User, {
        through: 'ConnectCollUsers',
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      this.belongsToMany(Wine, {
        through: 'ConnectCollWines',
        foreignKey: 'wineId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Collection.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Collection',
  });
  return Collection;
};
