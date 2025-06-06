// Carga variables de entorno desde el archivo .env
require("dotenv").config();

// Importa dependencias necesarias
const express = require("express");
const cors = require("cors");

// Importa modelos de la base de datos
const User = require("./models/user");
const Score = require("./models/score");
const { sequelize } = require("./models");

// Inicializa la aplicacion de Express
const app = express();

// Habilita CORS para permitir peticiones desde otros origenes (como el frontend)
app.use(cors());

// Permite que el servidor reciba datos en formato JSON
app.use(express.json());

// Importa y aplica las rutas de autenticacion bajo /api
const authRoutes = require("./routes/authRoutes");
app.use("/api", authRoutes);

// Importa y aplica las rutas de puntajes bajo /api
const scoreRoutes = require("./routes/puntajeRoutes");
app.use("/api", scoreRoutes);

// Importa y aplica las rutas de ranking bajo /api
const rankingRoutes = require("./routes/rankingRoutes");
app.use("/api", rankingRoutes);

// Intenta conectar con la base de datos usando Sequelize
sequelize
  .authenticate()
  .then(() => console.log("Conexion exitosa :)"))
  .catch((err) => console.log("Conexion fallida:", err));

// Ruta de prueba para confirmar que el servidor esta activo
app.get("/", (req, res) => {
  res.send("Servidor encontrado, backEnd funcionando.");
});

// Importa middleware que valida el token JWT
const verifyToken = require("./middleware/verifyToken");

// Ruta protegida que requiere token para acceder
app.get("/api/perfil", verifyToken, (req, res) => {
  res.json({
    message: "Ruta protegida accedida",
    user: req.user, // datos extraidos del token
  });
});

// Define el puerto en el que se ejecuta el servidor
const PORT = process.env.PORT || 3000;

// Inicia el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en http://localhost:${PORT}`);
});
