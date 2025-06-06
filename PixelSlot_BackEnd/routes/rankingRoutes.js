// Importa Express y crea el enrutador
const express = require("express");
const router = express.Router();

// Importa los modelos necesarios
const Score = require("../models/score");
const User = require("../models/user");

// Ruta para obtener el ranking global de jugadores
router.get("/ranking", async (req, res) => {
  try {
    // Busca todos los puntajes, incluyendo los datos del usuario asociado
    const ranking = await Score.findAll({
      include: {
        model: User, // Asocia cada puntaje con su respectivo usuario
        attributes: ["usuario", "fichas"], // Solo trae el nombre de usuario y fichas
      },
      order: [["puntaje", "DESC"]], // Ordena de mayor a menor puntaje
    });

    // Da formato a los resultados para enviar solo los datos necesarios
    const resultados = ranking.map((item) => ({
      usuario: item.usuario.usuario,
      puntaje: item.puntaje,
      fichas: item.usuario.fichas,
    }));

    // Devuelve el ranking en formato JSON
    res.json(resultados);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener el ranking." });
  }
});

module.exports = router;
