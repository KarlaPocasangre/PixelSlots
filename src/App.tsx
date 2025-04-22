import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Ranking from "./pages/Ranking";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Logout from "./pages/Logout";
import NotFound from "./errors/NotFound";
import Unauthorized from "./errors/Unauthorized";
import InternalServerError from "./errors/InternalServerError";
import ServiceUnavailable from "./errors/ServiceUnavailable";

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
          path="/notfound"
          element={
            <AuthLayout>
              <NotFound />
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
        <Route
          path="/internalservererror"
          element={
            <AuthLayout>
              <InternalServerError />
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
      </Routes>
    </Router>
  );
}

export default App;
