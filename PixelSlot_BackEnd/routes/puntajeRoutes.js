const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const Score = require("../models/score");
const User = require("../models/user");

// Actualizar o crear puntaje y fichas
router.post("/puntaje", verifyToken, async (req, res) => {
  const { puntaje } = req.body;
  const userId = req.user.id;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }

    if (user.fichas <= 0) {
      return res
        .status(400)
        .json({ error: "No tienes fichas suficientes para jugar." });
    }

    let score = await Score.findOne({ where: { id_usuario: userId } });
    if (!score) {
      score = await Score.create({ id_usuario: userId, puntaje: 0 });
    }

    score.puntaje += puntaje;
    user.fichas -= 1;

    await score.save();
    await user.save();

    const totalPuntaje = await Score.sum("puntaje", {
      where: { id_usuario: userId },
    });

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

// Ruta para obtener el puntaje total
router.get("/puntaje-total", verifyToken, async (req, res) => {
  try {
    const totalPuntaje = await Score.sum("puntaje", {
      where: { id_usuario: req.user.id },
    });

    res.json({ totalPuntaje: totalPuntaje || 0 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el puntaje total." });
  }
});

// NUEVA RUTA: lógica de juego completa
router.post("/jugar", verifyToken, async (req, res) => {
  const { simbolos } = req.body; // Ej: ['audifono', 'audifono', 'audifono']
  const userId = req.user.id;

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
    if (!user || user.fichas <= 0) {
      return res
        .status(400)
        .json({ error: "No tienes fichas suficientes para jugar." });
    }

    const [a, b, c] = simbolos;
    let puntos = 0;
    let simboloGanador = null;

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
      puntos = 0;
    }

    let score = await Score.findOne({ where: { id_usuario: userId } });
    if (!score) {
      score = await Score.create({ id_usuario: userId, puntaje: 0 });
    }

    score.puntaje += puntos;
    user.fichas -= 1;

    await score.save();
    await user.save();

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
