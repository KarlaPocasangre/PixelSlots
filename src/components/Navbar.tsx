import { NavLink } from "react-router-dom";
import user from "../assets/img/charlar.png";
import "../css/Navbar.css";

function Navbar() {
  const navLinkStyles = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? "#f7c100" : "#ffffff",
    textDecoration: "none",
  });

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
              <li className="nav-item dropdown user-dropdown ">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center icono-perfil"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-fill "></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end user-menu p-3">
                  <img className="user" src={user} alt="Logo" />
                  <li className="user-name mb-2">Himeko98</li>
                  <div className="divider"></div>
                  <li>
                    <NavLink to="/login" className="btn logout-btn w-100">
                      Cerrar Sesión
                    </NavLink>
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
