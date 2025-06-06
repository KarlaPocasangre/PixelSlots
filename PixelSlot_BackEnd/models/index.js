// Importa la instancia de Sequelize configurada previamente
const sequelize = require("./bd");

// Importa los modelos de la base de datos
const User = require("./user");
const Score = require("./score");

// Define la relacion: un usuario tiene un solo registro de puntaje
User.hasOne(Score, { foreignKey: "id_usuario" });

// Define la relacion inversa: un puntaje pertenece a un usuario
Score.belongsTo(User, { foreignKey: "id_usuario" });

// Exporta la instancia y los modelos para poder usarlos en el resto del proyecto
module.exports = {
  sequelize,
  User,
  Score,
};
