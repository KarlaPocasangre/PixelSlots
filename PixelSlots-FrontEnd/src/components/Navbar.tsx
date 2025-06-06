// Importa herramientas de navegacion y alertas
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Imagen para la alerta de cierre de sesion
import sorpresa from "../assets/img/conmocionado.png";

// Estilos del navbar
import "../css/Navbar.css";

// Hooks de React
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate(); // Para redirigir despues de cerrar sesion

  // Funcion que aplica estilos condicionales segun si el enlace esta activo
  const navLinkStyles = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? "#f7c100" : "#ffffff",
    textDecoration: "none",
  });

  // Funcion que muestra una alerta para confirmar cierre de sesion
  const showLogoutAlert = () => {
    Swal.fire({
      title: "Cerrar sesion",
      text: "¿Estas seguro de que quieres cerrar sesion?",
      imageUrl: sorpresa,
      imageWidth: 140,
      imageHeight: 140,
      imageAlt: "emoji sorprendido",
      showCancelButton: true,
      confirmButtonText: "Si, cerrar sesion",
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
        // Elimina datos de la sesion del almacenamiento local
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        localStorage.removeItem("fichas");
        localStorage.removeItem("userId");

        // Muestra confirmacion de cierre y redirige al login
        Swal.fire({
          title: "Sesion cerrada",
          text: "Has cerrado sesion exitosamente.",
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

  // Estado para mostrar el nombre del usuario
  const [usuario, setUsuario] = useState("");

  // Al cargar el componente, obtiene el nombre del usuario del localStorage
  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) setUsuario(usuarioGuardado);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        {/* Logo de la aplicacion que redirige a la pagina principal */}
        <NavLink className="navbar-brand text-light logo-glow" to="/">
          PixelSlots
        </NavLink>

        {/* Boton para desplegar el menu en pantallas pequeñas */}
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

        {/* Contenedor de enlaces de navegacion */}
        <div
          className="collapse navbar-collapse justify-content-end me-5"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav nav-underline">
            {/* Enlace: Home */}
            <li className="nav-item">
              <NavLink
                className="nav-link mi-navlink-activo"
                to="/"
                style={navLinkStyles}
              >
                Home
              </NavLink>
            </li>

            {/* Enlace: Game */}
            <li className="nav-item">
              <NavLink
                className="nav-link mi-navlink-activo"
                to="/game"
                style={navLinkStyles}
              >
                Game
              </NavLink>
            </li>

            {/* Enlace: Ranking */}
            <li className="nav-item">
              <NavLink
                className="nav-link mi-navlink-activo"
                to="/ranking"
                style={navLinkStyles}
              >
                Ranking
              </NavLink>
            </li>

            {/* Menu desplegable de usuario */}
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
                  {/* Muestra el nombre del usuario */}
                  <li className="user-name mb-2">
                    {usuario ?? "Cargando..."} 🎮
                  </li>
                  <div className="divider"></div>
                  {/* Boton para cerrar sesion */}
                  <li>
                    <button
                      onClick={showLogoutAlert}
                      className="btn logout-btn w-100"
                    >
                      <i className="bi bi-box-arrow-right me-2"></i>
                      Cerrar Sesion
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
