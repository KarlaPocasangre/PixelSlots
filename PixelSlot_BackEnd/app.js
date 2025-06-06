require("dotenv").config();
const express = require("express");
const cors = require("cors");
const User = require("./models/user");
const Score = require("./models/score");
const { sequelize } = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes"); // importar rutas

app.use("/api", authRoutes); // montar en /api

const scoreRoutes = require("./routes/puntajeRoutes"); // si lo creaste así
app.use("/api", scoreRoutes);

const rankingRoutes = require("./routes/rankingRoutes");
app.use("/api", rankingRoutes);

//prueba de conexion
//conexion a la base de datos

sequelize
  .authenticate()
  .then(() => console.log("Conexión exitosa :)"))
  .catch((err) => console.log("Conexión fallida:", err));

app.get("/", (req, res) => {
  res.send("Servidor encontrado, backEnd funcionando.");
});

const verifyToken = require("./middleware/verifyToken");

app.get("/api/perfil", verifyToken, (req, res) => {
  res.json({
    message: "Ruta protegida accedida",
    user: req.user, // datos del token
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en http://localhost:${PORT}"`);
});
