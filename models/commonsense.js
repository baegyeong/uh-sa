const { DataTypes, Sequelize } = require('sequelize');

module.exports = class Commonsense extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      quiz: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      choice1: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      choice2: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      answer: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Commonsense',
      tableName: 'Commonsenses',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};
