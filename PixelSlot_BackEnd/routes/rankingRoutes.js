const express = require("express");
const router = express.Router();
const Score = require("../models/score");
const User = require("../models/user");

// Obtener ranking global
router.get("/ranking", async (req, res) => {
  try {
    const ranking = await Score.findAll({
      include: {
        model: User,
        attributes: ["usuario", "fichas"],
      },
      order: [["puntaje", "DESC"]],
    });

    const resultados = ranking.map((item) => ({
      usuario: item.usuario.usuario, // ✅ clave corregida
      puntaje: item.puntaje,
      fichas: item.usuario.fichas,
    }));

    res.json(resultados);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener el ranking." });
  }
});

module.exports = router;
