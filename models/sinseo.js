const { DataTypes, Sequelize } = require('sequelize');

module.exports = class Sinseo extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      image: {
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
      modelName: 'Sinseo',
      tableName: 'Sinseos',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};