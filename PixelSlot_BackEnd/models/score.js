const { DataTypes } = require("sequelize");
const sequelize = require("./bd");
const User = require("./user"); // ✅ importar el modelo relacionado

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

// ✅ declarar la relación antes de exportar
Score.belongsTo(User, {
  foreignKey: "id_usuario",
  as: "usuario", // importante para usar item.usuario.usuario
});

module.exports = Score;
