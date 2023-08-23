'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class like extends Model {
    static associate(models) {
      // define association here
    }
  }
  like.init({
    userId: DataTypes.INTEGER,
    contentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'like',
  });
  return like;
};