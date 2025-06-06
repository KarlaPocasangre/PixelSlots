// Importa herramientas necesarias de React y React Router
import { Navigate } from "react-router-dom";
import React from "react";

// Define los props que este componente espera: un nodo hijo
interface Props {
  children: React.ReactNode;
}

// Componente que protege rutas privadas
const PrivateRoute = ({ children }: Props) => {
  // Verifica si el usuario tiene un token en el localStorage
  const token = localStorage.getItem("token");

  // Si hay token, permite mostrar el contenido (la pagina)
  // Si no hay token, redirige al login
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
