import { showTermsAlert } from "../utils/alerts";
import { showAboutUsAlert } from "../utils/alerts";
import { showCreditsAlert } from "../utils/alerts";
import { showcontactAlert } from "../utils/alerts";

function Footer() {
  return (
    <footer className="  py-1 mt-auto">
      <div className="container text-center">
        <p className="mb-1">
          © 2025 PixelSlots. Todos los derechos reservados.
        </p>
        <div>
          <span
            onClick={showTermsAlert}
            className=" me-5 "
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Terminos
          </span>
          <span
            onClick={showCreditsAlert}
            className=" me-5"
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Atribuciones
          </span>
          <span
            onClick={showcontactAlert}
            className=" me-5"
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Contacto
          </span>
          <span
            onClick={showAboutUsAlert}
            className=" me-5"
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Sobre Nosotros
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
