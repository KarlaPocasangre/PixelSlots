const { DataTypes } = require("sequelize");
const sequelize = require("./bd");
const User = require("./user"); //

const Score = sequelize.define(
  "puntaje",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    puntaje: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

Score.belongsTo(User, {
  foreignKey: "id_usuario",
  as: "usuario",
});

module.exports = Score;
