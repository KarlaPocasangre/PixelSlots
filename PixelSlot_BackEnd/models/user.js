// Importa los tipos de datos de Sequelize
const { DataTypes } = require("sequelize");

// Importa la instancia de conexion a la base de datos
const sequelize = require("./bd");

// Define el modelo 'usuario' con sus campos y restricciones
const User = sequelize.define(
  "usuario",
  {
    // ID autoincrementable como clave primaria
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    // Nombre completo del usuario
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Correo electronico, debe ser unico
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },

    // Edad, debe ser mayor o igual a 18
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 18, // Validacion para que no se registren menores de edad
      },
    },

    // Nombre de usuario (nickname), tambien unico
    usuario: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },

    // Contraseña encriptada o en texto (segun implementacion)
    pass: {
      type: DataTypes.TEXT,
      unique: true, // Aunque no siempre se recomienda hacerlo unico
      allowNull: false,
    },

    // Cantidad de fichas disponibles para jugar
    fichas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5, // Valor inicial cuando se registra
    },
  },
  {
    // No incluye campos createdAt ni updatedAt
    timestamps: false,

    // Usa el nombre exacto 'usuario' como nombre de tabla
    freezeTableName: true,
  }
);

// Exporta el modelo para ser usado en otros archivos
module.exports = User;
