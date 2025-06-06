// Importa funciones que muestran alertas modales al hacer clic
import { showTermsAlert } from "../utils/alerts";
import { showAboutUsAlert } from "../utils/alerts";
import { showCreditsAlert } from "../utils/alerts";
import { showcontactAlert } from "../utils/alerts";

// Importa los estilos especificos del pie de pagina
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="mt-auto">
      <div className="container text-center">
        {/* Texto de derechos de autor */}
        <p className="mb-2">
          © 2025 PixelSlots. Todos los derechos reservados.
        </p>

        {/* Enlaces interactivos que muestran informacion al hacer clic */}
        <div>
          <span onClick={showTermsAlert} className="footer-link me-4">
            Terminos
          </span>
          <span onClick={showCreditsAlert} className="footer-link me-4">
            Atribuciones
          </span>
          <span onClick={showcontactAlert} className="footer-link me-4">
            Contacto
          </span>
          <span onClick={showAboutUsAlert} className="footer-link me-4">
            Sobre Nosotros
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
