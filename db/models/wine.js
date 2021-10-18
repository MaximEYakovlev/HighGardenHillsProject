'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Collection, Rating, Set, User,
    }) {
      // define association here
      this.belongsToMany(Collection, {
        through: 'ConnectCollWines',
        foreignKey: 'wineId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      this.belongsToMany(Rating, {
        through: 'ConnectRateWines',
        foreignKey: 'wineId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      this.belongsToMany(Set, {
        through: 'Connections',
        foreignKey: 'wineId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      this.belongsToMany(User, {
        through: 'Favourites',
        foreignKey: 'wineId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Wine.init({
    name: DataTypes.STRING,
    year: DataTypes.INTEGER,
    type: DataTypes.STRING,
    color: DataTypes.STRING,
    sweet: DataTypes.STRING,
    country: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Wine',
  });
  return Wine;
};
