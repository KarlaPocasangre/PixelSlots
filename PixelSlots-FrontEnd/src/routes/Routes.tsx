// src/routes/routes.tsx
import { RouteObject } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import Home from "../pages/Home";
import Game from "../pages/Game";
import Ranking from "../pages/Ranking";
import Login from "../pages/Login";
import Logout from "../pages/Logout";

import Loading from "../pages/Loading";
import NotFound from "../errors/NotFound";

import PrivateRoute from "./privateRoute";

const Routes: RouteObject[] = [
  {
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
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/logout", element: <Logout /> },
      { path: "/loading", element: <Loading /> },
      { path: "/notfound", element: <NotFound /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default Routes;
