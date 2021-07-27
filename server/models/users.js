'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.users.belongsTo(models.favorites, {foreignKey: 'favoritesID'})
    }
  };
  users.init({
    fName: DataTypes.STRING,
    lName: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    favoritesID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};