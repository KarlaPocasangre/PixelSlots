// Importa Express y crea un enrutador
const express = require("express");
const router = express.Router();

// Importa el controlador que maneja la logica de autenticacion
const authController = require("../controllers/authController");

// Ruta para registrar un nuevo usuario
// Espera un POST a /api/register
router.post("/register", authController.register);

// Ruta para iniciar sesion
// Espera un POST a /api/login
router.post("/login", authController.login);

// Exporta el enrutador para que pueda usarse en el servidor principal
module.exports = router;
