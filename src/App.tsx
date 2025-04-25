import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Ranking from "./pages/Ranking";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Logout from "./pages/Logout";
import Loading from "./errors/Loading";
import NotFound from "./errors/NotFound";
import Unauthorized from "./errors/Unauthorized";
import InternalServerError from "./errors/InternalServerError";
import ServiceUnavailable from "./errors/ServiceUnavailable";
import BadRequest from "./errors/BadRequest";
import Forbidden from "./errors/Forbidden";
import BadGateway from "./errors/BadGateway";
import GatewayTimeout from "./errors/GatewayTimeout";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/logout"
          element={
            <AuthLayout>
              <Logout />
            </AuthLayout>
          }
        />
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/game"
          element={
            <MainLayout>
              <Game />
            </MainLayout>
          }
        />
        <Route
          path="/ranking"
          element={
            <MainLayout>
              <Ranking />
            </MainLayout>
          }
        />
        <Route
          path="/loading"
          element={
            <AuthLayout>
              <Loading />
            </AuthLayout>
          }
        />
        <Route
          path="/badgateway"
          element={
            <AuthLayout>
              <BadGateway />
            </AuthLayout>
          }
        />
        <Route
          path="/badrequest"
          element={
            <AuthLayout>
              <BadRequest />
            </AuthLayout>
          }
        />
        <Route
          path="/forbidden"
          element={
            <AuthLayout>
              <Forbidden />
            </AuthLayout>
          }
        />
        <Route
          path="/gatewaytimeout"
          element={
            <AuthLayout>
              <GatewayTimeout />
            </AuthLayout>
          }
        />
        <Route
          path="/internalservererror"
          element={
            <AuthLayout>
              <InternalServerError />
            </AuthLayout>
          }
        />
        <Route
          path="/notfound"
          element={
            <AuthLayout>
              <NotFound />
            </AuthLayout>
          }
        />
        <Route
          path="/serviceunavailable"
          element={
            <AuthLayout>
              <ServiceUnavailable />
            </AuthLayout>
          }
        />
        <Route
          path="/unauthorized"
          element={
            <AuthLayout>
              <Unauthorized />
            </AuthLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
