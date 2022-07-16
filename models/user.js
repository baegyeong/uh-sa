const { DataTypes, Sequelize } = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      category: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      username: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: false,
      },
      score: {
        type: DataTypes.INTEGER(20),
        allowNull: false,
        unique: false,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'User',
      tableName: 'Users',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};