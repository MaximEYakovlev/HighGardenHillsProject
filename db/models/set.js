'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Wine }) {
      // define association here
      this.belongsToMany(Wine, {
        through: 'Connections',
        foreignKey: 'setId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Set.init({
    event: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Set',
  });
  return Set;
};
