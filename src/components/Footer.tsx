function Footer() {
  const handleTermsClick = () => {
    alert("Ejemplo de alerta UwU 🎮✨");
  };

  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-1">
          © 2025 PixelSlots. Todos los derechos reservados.
        </p>
        <div>
          <span
            onClick={handleTermsClick}
            className="text-light me-3"
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Terminos y Condiciones
          </span>
          <span
            onClick={handleTermsClick}
            className="text-light me-3"
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Atribuciones
          </span>
          <span
            onClick={handleTermsClick}
            className="text-light me-3"
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Contacto
          </span>
          <span
            onClick={handleTermsClick}
            className="text-light me-3"
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
