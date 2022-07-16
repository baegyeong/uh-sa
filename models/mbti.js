const { DataTypes, Sequelize } = require("sequelize");

module.exports = class Mbti extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        question: {
          type: DataTypes.STRING(255),
          allowNull: false,
          unique: true,
        },
        choice1: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        choice2: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        explain: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Mbti",
        tableName: "Mbtis",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};
