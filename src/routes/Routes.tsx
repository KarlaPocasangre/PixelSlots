// src/routes/routes.tsx
import { RouteObject } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import Home from "../pages/Home";
import Game from "../pages/Game";
import Ranking from "../pages/Ranking";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Taptoplay from "../pages/Taptoplay";

import Loading from "../errors/Loading";
import NotFound from "../errors/NotFound";
import Unauthorized from "../errors/Unauthorized";
import InternalServerError from "../errors/InternalServerError";
import ServiceUnavailable from "../errors/ServiceUnavailable";
import BadRequest from "../errors/BadRequest";
import Forbidden from "../errors/Forbidden";
import BadGateway from "../errors/BadGateway";
import GatewayTimeout from "../errors/GatewayTimeout";

const Routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/game", element: <Game /> },
      { path: "/ranking", element: <Ranking /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/logout", element: <Logout /> },
      { path: "/loading", element: <Loading /> },
      { path: "/taptoplay", element: <Taptoplay /> },
      { path: "/badgateway", element: <BadGateway /> },
      { path: "/badrequest", element: <BadRequest /> },
      { path: "/forbidden", element: <Forbidden /> },
      { path: "/gatewaytimeout", element: <GatewayTimeout /> },
      { path: "/internalservererror", element: <InternalServerError /> },
      { path: "/serviceunavailable", element: <ServiceUnavailable /> },
      { path: "/unauthorized", element: <Unauthorized /> },
      { path: "/notfound", element: <NotFound /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default Routes;
