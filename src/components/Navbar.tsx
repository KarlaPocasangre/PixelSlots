import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import user from "../assets/img/charlar.png";
import "../css/Navbar.css";

function Navbar() {
  const navigate = useNavigate(); // Para redirigir después de cerrar sesión

  const navLinkStyles = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? "#f7c100" : "#ffffff",
    textDecoration: "none",
  });

  const showLogoutAlert = () => {
    Swal.fire({
      title: "Cerrar sesión",
      text: "¿Estás seguro de que quieres cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3f83da",
      cancelButtonColor: "#bd4aa7",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sesión cerrada",
          text: "Has cerrado sesión exitosamente.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          navigate("/login");
        });
      }
    });
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-light" to="/">
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
                <ul className="dropdown-menu dropdown-menu-end user-menu p-3">
                  <img className="user" src={user} alt="Logo usuario" />
                  <li className="user-name mb-2">Himeko98</li>
                  <div className="divider"></div>
                  <li>
                    <button
                      onClick={showLogoutAlert}
                      className="btn logout-btn w-100"
                    >
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
