// Importa modelos y librerias necesarias
const User = require("../models/user");
const Score = require("../models/score");
const bcrypt = require("bcryptjs"); // Para encriptar contraseñas
const jwt = require("jsonwebtoken"); // Para generar tokens JWT

// -------------------- REGISTRO --------------------

// Controlador para registrar un nuevo usuario
exports.register = async (req, res) => {
  const { nombre, usuario, email, pass, edad } = req.body;

  // Verifica que el usuario sea mayor de edad
  if (edad < 18) {
    return res
      .status(400)
      .json({ error: "Debes tener al menos 18 años para registrarte." });
  }

  try {
    // Verifica si el correo ya esta registrado
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "El correo electronico ya esta registrado." });
    }

    // Encripta la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(pass, 10);

    // Crea un nuevo usuario en la base de datos
    const newUser = await User.create({
      nombre,
      usuario,
      email,
      pass: hashedPassword,
      edad,
      fichas: 5, // Se asignan 5 fichas por defecto
    });

    // Crea un registro inicial de puntaje en 0
    await Score.create({
      id_usuario: newUser.id,
      puntaje: 0,
    });

    // Responde con exito
    res.status(201).json({
      message: "Usuario registrado con exito",
      userId: newUser.id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error interno al registrar usuario." });
  }
};

// -------------------- LOGIN --------------------

// Controlador para iniciar sesion
exports.login = async (req, res) => {
  const { email, pass } = req.body;

  try {
    // Busca el usuario por su correo
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Correo no encontrado." });
    }

    // Compara la contraseña ingresada con la almacenada (encriptada)
    const validPassword = await bcrypt.compare(pass, user.pass);
    if (!validPassword) {
      return res.status(401).json({ error: "Contraseña incorrecta." });
    }

    // Genera un token JWT con los datos del usuario
    const token = jwt.sign(
      {
        id: user.id,
        usuario: user.usuario,
        email: user.email,
      },
      process.env.JWT_SECRET, // Clave secreta almacenada en .env
      { expiresIn: "1h" } // Token valido por 1 hora
    );

    // Devuelve el token y datos basicos del usuario
    res.json({
      message: "Login exitoso",
      token,
      userId: user.id,
      usuario: user.usuario,
      fichas: user.fichas,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al iniciar sesion." });
  }
};

// -------------------- ACTUALIZAR PUNTAJE --------------------

// Controlador opcional para actualizar puntaje (no se usa directamente en login/register)
exports.actualizarPuntaje = async (req, res) => {
  try {
    const { puntaje } = req.body;
    const userId = req.user.id; // ID extraido del token

    // Busca el registro de puntaje del usuario
    const score = await Score.findOne({ where: { id_usuario: userId } });

    if (!score) {
      return res.status(404).json({ error: "Puntaje no encontrado" });
    }

    // Suma los puntos y guarda
    score.puntaje += puntaje;
    await score.save();

    // Actualiza las fichas del usuario
    const user = await User.findByPk(userId);
    if (!user || user.fichas <= 0) {
      return res.status(400).json({ error: "No tienes fichas suficientes" });
    }

    user.fichas -= 1;
    await user.save();

    // Respuesta con el nuevo estado
    res.status(200).json({
      message: "Puntaje actualizado con exito",
      puntaje: score.puntaje,
      fichas: user.fichas,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al actualizar puntaje" });
  }
};
