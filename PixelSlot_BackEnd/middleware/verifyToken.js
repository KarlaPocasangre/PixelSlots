// Importa la libreria jsonwebtoken para verificar el token
const jwt = require("jsonwebtoken");

// Middleware que valida si el usuario envio un token valido
const verifyToken = (req, res, next) => {
  // Obtiene el encabezado de autorizacion (Authorization: Bearer <token>)
  const authHeader = req.headers["authorization"];

  // Extrae el token separando por espacio y tomando la segunda parte
  const token = authHeader && authHeader.split(" ")[1];

  // Si no se proporciona token, responde con error 401 (no autorizado)
  if (!token) {
    return res.status(401).json({ error: "Token no proporcionado." });
  }

  try {
    // Verifica si el token es valido usando la clave secreta
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Guarda los datos decodificados dentro del objeto request para usarlos en la ruta
    req.user = decoded;

    // Permite continuar con la siguiente funcion (la ruta protegida)
    next();
  } catch (err) {
    // Si el token es invalido o ha expirado, responde con error 403 (prohibido)
    return res.status(403).json({ error: "Token invalido o expirado." });
  }
};

// Exporta el middleware para usarlo en rutas protegidas
module.exports = verifyToken;
