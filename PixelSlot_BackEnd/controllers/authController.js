const User = require("../models/user");
const Score = require("../models/score");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Registrar un nuevo usuario
exports.register = async (req, res) => {
  const { nombre, usuario, email, pass, edad } = req.body;

  if (edad < 18) {
    return res
      .status(400)
      .json({ error: "Debes tener al menos 18 años para registrarte." });
  }

  try {
    // Verificar si ya existe el email
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "El correo electrónico ya está registrado." });
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(pass, 10);

    // Crear usuario
    const newUser = await User.create({
      nombre,
      usuario,
      email,
      pass: hashedPassword,
      edad,
      fichas: 5,
    });

    // Crear puntaje inicial en 0
    await Score.create({
      id_usuario: newUser.id,
      puntaje: 0,
    });

    res.status(201).json({
      message: "Usuario registrado con éxito",
      userId: newUser.id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error interno al registrar usuario." });
  }
};

// Iniciar sesión
exports.login = async (req, res) => {
  const { email, pass } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Correo no encontrado." });
    }

    const validPassword = await bcrypt.compare(pass, user.pass);
    if (!validPassword) {
      return res.status(401).json({ error: "Contraseña incorrecta." });
    }

    // Generar JWT
    const token = jwt.sign(
      {
        id: user.id,
        usuario: user.usuario,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login exitoso",
      token,
      userId: user.id,
      usuario: user.usuario,
      fichas: user.fichas,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al iniciar sesión." });
  }
};

exports.actualizarPuntaje = async (req, res) => {
  try {
    const { puntaje } = req.body;
    const userId = req.user.id;

    const score = await Score.findOne({ where: { id_usuario: userId } });

    if (!score) {
      return res.status(404).json({ error: "Puntaje no encontrado" });
    }

    score.puntaje += puntaje;
    await score.save();

    // Update de las fichas
    const user = await User.findByPk(userId);
    if (!user || user.fichas <= 0) {
      return res.status(400).json({ error: "No tienes fichas suficientes" });
    }

    user.fichas -= 1;
    await user.save();

    res.status(200).json({
      message: "Puntaje actualizado con éxito",
      puntaje: score.puntaje,
      fichas: user.fichas,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al actualizar puntaje" });
  }
};
