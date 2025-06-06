// src/routes/routes.tsx

// Importa el tipo RouteObject para definir rutas
import { RouteObject } from "react-router-dom";

// Importa los layouts principales
import MainLayout from "../layouts/MainLayout"; // Layout para paginas protegidas (con navbar, fondo, etc)
import AuthLayout from "../layouts/AuthLayout"; // Layout para autenticacion (login, registro, etc)

// Importa las paginas
import Home from "../pages/Home";
import Game from "../pages/Game";
import Ranking from "../pages/Ranking";
import Login from "../pages/Login";
import Logout from "../pages/Logout";

import Loading from "../pages/Loading";
import NotFound from "../errors/NotFound";

// Importa la ruta protegida que valida si hay sesion activa
import PrivateRoute from "./privateRoute";

// Arreglo de rutas del sistema, agrupadas por layout
const Routes: RouteObject[] = [
  {
    // Rutas que usan el layout principal (requieren estar logueado)
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/game",
        element: (
          <PrivateRoute>
            <Game />
          </PrivateRoute>
        ),
      },
      {
        // Ruta alternativa a "/game" que tambien carga el juego
        path: "/home",
        element: (
          <PrivateRoute>
            <Game />
          </PrivateRoute>
        ),
      },
      {
        path: "/ranking",
        element: (
          <PrivateRoute>
            <Ranking />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    // Rutas que usan el layout de autenticacion
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> }, // Pantalla de login
      { path: "/logout", element: <Logout /> }, // Registro o logout temporal
      { path: "/loading", element: <Loading /> }, // Pantalla de carga
      { path: "/notfound", element: <NotFound /> }, // Pagina de error personalizada
      { path: "*", element: <NotFound /> }, // Ruta comodin: muestra NotFound para cualquier ruta no valida
    ],
  },
];

export default Routes;
