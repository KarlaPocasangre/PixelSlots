import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import sorpresa from "../assets/img/conmocionado.png";
import "../css/Navbar.css";
import { useEffect, useState } from "react";
function Navbar() {
  const navigate = useNavigate();

  const navLinkStyles = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? "#f7c100" : "#ffffff",
    textDecoration: "none",
  });

  const showLogoutAlert = () => {
  Swal.fire({
    title: "Cerrar sesión",
    text: "¿Estás seguro de que quieres cerrar sesión?",
    imageUrl: sorpresa,
    imageWidth: 140,
    imageHeight: 140,
    imageAlt: "emoji sorprendido",
    showCancelButton: true,
    confirmButtonText: "Sí, cerrar sesión",
    cancelButtonText: "Cancelar",
    didOpen: () => {
      const img = document.querySelector(".swal2-image");
      if (img) {
        img.classList.add(
          "animate__animated",
          "animate__tada",
          "animate__infinite"
        );
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      // 🔐 Limpiar el localStorage antes de redirigir
      localStorage.removeItem("token");
      localStorage.removeItem("usuario");
      localStorage.removeItem("fichas");
      localStorage.removeItem("userId");

      Swal.fire({
        title: "Sesión cerrada",
        text: "Has cerrado sesión exitosamente.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
        didClose: () => {
          navigate("/login");
        },
      });
    }
  });
};


  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");

    if (usuarioGuardado) setUsuario(usuarioGuardado);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-light logo-glow" to="/">
          PixelSlots
        </NavLink>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-chevron-double-down"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end me-5"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav nav-underline">
            <li className="nav-item">
              <NavLink
                className="nav-link mi-navlink-activo"
                to="/"
                style={navLinkStyles}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link mi-navlink-activo"
                to="/game"
                style={navLinkStyles}
              >
                Game
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link mi-navlink-activo"
                to="/ranking"
                style={navLinkStyles}
              >
                Ranking
              </NavLink>
            </li>
            <li className="nav-item dropdown me-5">
              <li className="nav-item dropdown user-dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center icono-perfil"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-fill"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end user-menu animate__animated animate__fadeInDown p-3">
                  <li className="user-name mb-2">{usuario ?? "Cargando..."} 🎮</li>
                  <div className="divider"></div>
                  <li>
                    <button
                      onClick={showLogoutAlert}
                      className="btn logout-btn w-100 "
                    >
                      <i className="bi bi-box-arrow-right me-2"></i>
                      Cerrar Sesión
                    </button>
                  </li>
                </ul>
              </li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
