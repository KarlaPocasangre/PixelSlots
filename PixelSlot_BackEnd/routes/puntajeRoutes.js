// Importa Express y crea el router
const express = require("express");
const router = express.Router();

// Importa el middleware que valida el token JWT
const verifyToken = require("../middleware/verifyToken");

// Importa los modelos de la base de datos
const Score = require("../models/score");
const User = require("../models/user");

// Ruta para actualizar o crear puntaje y fichas
router.post("/puntaje", verifyToken, async (req, res) => {
  const { puntaje } = req.body;
  const userId = req.user.id; // ID extraido del token

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }

    // Verifica si el usuario tiene fichas disponibles
    if (user.fichas <= 0) {
      return res
        .status(400)
        .json({ error: "No tienes fichas suficientes para jugar." });
    }

    // Busca el puntaje del usuario o lo crea si no existe
    let score = await Score.findOne({ where: { id_usuario: userId } });
    if (!score) {
      score = await Score.create({ id_usuario: userId, puntaje: 0 });
    }

    // Suma el nuevo puntaje y descuenta una ficha
    score.puntaje += puntaje;
    user.fichas -= 1;

    // Guarda los cambios en la base de datos
    await score.save();
    await user.save();

    // Suma total de puntos del usuario
    const totalPuntaje = await Score.sum("puntaje", {
      where: { id_usuario: userId },
    });

    // Responde con el total actualizado
    res.status(200).json({
      message: "Puntaje y fichas actualizados correctamente.",
      fichas: user.fichas,
      totalPuntaje,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al actualizar puntaje y fichas." });
  }
});

// Ruta para obtener el puntaje total acumulado del usuario
router.get("/puntaje-total", verifyToken, async (req, res) => {
  try {
    const totalPuntaje = await Score.sum("puntaje", {
      where: { id_usuario: req.user.id },
    });

    res.json({ totalPuntaje: totalPuntaje || 0 }); // Si no hay puntaje, devuelve 0
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el puntaje total." });
  }
});

// Ruta principal para procesar una jugada
router.post("/jugar", verifyToken, async (req, res) => {
  const { simbolos } = req.body;
  const userId = req.user.id;

  // Valores extra segun el simbolo que salga
  const BONOS = {
    audifono: 30,
    lentes: 25,
    puntero: 20,
    mando: 35,
    cassete: 15,
    cartucho: 10,
    disco: 5,
  };

  try {
    const user = await User.findByPk(userId);

    // Verifica si el usuario existe y tiene fichas
    if (!user || user.fichas <= 0) {
      return res
        .status(400)
        .json({ error: "No tienes fichas suficientes para jugar." });
    }

    // Desestructura los simbolos obtenidos en la tirada
    const [a, b, c] = simbolos;
    let puntos = 0;
    let simboloGanador = null;

    // Determina la combinacion ganadora y asigna puntos
    if (a === b && b === c) {
      simboloGanador = a;
      puntos = (650 + BONOS[simboloGanador.toLowerCase()] || 0) * 2;
    } else if (a === b || a === c) {
      simboloGanador = a;
      puntos = 225 + (BONOS[simboloGanador.toLowerCase()] || 0);
    } else if (b === c) {
      simboloGanador = b;
      puntos = 225 + (BONOS[simboloGanador.toLowerCase()] || 0);
    } else {
      puntos = 0; // Si no hay coincidencias, no se gana nada
    }

    // Busca o crea el registro de puntaje para el usuario
    let score = await Score.findOne({ where: { id_usuario: userId } });
    if (!score) {
      score = await Score.create({ id_usuario: userId, puntaje: 0 });
    }

    // Aplica los cambios: suma puntos, descuenta una ficha
    score.puntaje += puntos;
    user.fichas -= 1;

    await score.save();
    await user.save();

    // Devuelve el resultado de la jugada al frontend
    res.json({
      message: "Juego procesado correctamente.",
      puntajeGanado: puntos,
      fichasRestantes: user.fichas,
      puntajeTotal: score.puntaje,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al procesar el juego." });
  }
});

module.exports = router;
