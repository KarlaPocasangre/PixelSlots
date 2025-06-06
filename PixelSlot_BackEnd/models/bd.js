// Importa Sequelize para conectarse a la base de datos
const { Sequelize } = require("sequelize");

// Carga las variables de entorno desde .env
require("dotenv").config();

// Crea una instancia de Sequelize con los datos de conexion
const sequelize = new Sequelize(
  process.env.DB_NAME, // Nombre de la base de datos
  process.env.DB_USER, // Usuario de la base de datos
  process.env.DB_PASS, // Contraseña del usuario
  {
    host: process.env.DB_HOST, // Servidor donde esta la base de datos
    dialect: "mysql", // Tipo de base de datos (MySQL en este caso)
  }
);

// Exporta la instancia para que pueda usarse en otros archivos
module.exports = sequelize;
