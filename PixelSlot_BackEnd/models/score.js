// Importa tipos de datos de Sequelize
const { DataTypes } = require("sequelize");

// Importa la instancia de la base de datos
const sequelize = require("./bd");

// Importa el modelo de usuario para establecer relaciones
const User = require("./user");

// Define el modelo "puntaje" (Score) con sus columnas y tipos de datos
const Score = sequelize.define(
  "puntaje",
  {
    // ID autoincrementable como clave primaria
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    // ID del usuario asociado al puntaje
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    // Valor del puntaje acumulado
    puntaje: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    // No usa campos createdAt ni updatedAt
    timestamps: false,

    // Usa exactamente el nombre "puntaje" como nombre de tabla
    freezeTableName: true,
  }
);

// Establece la relacion: cada puntaje pertenece a un usuario
Score.belongsTo(User, {
  foreignKey: "id_usuario",
  as: "usuario", // Alias usado al hacer includes en consultas
});

// Exporta el modelo para usarlo en rutas o controladores
module.exports = Score;
