import "../css/Logout.css";
import fondocalle from "../assets/img/Fondo-calle-Arcade.gif";

function Registro() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Limpiar errores anteriores
    document.querySelectorAll(".error-msg").forEach((s) => s.remove());

    let valido = true;
    const campos = [
      { id: "correo", nombre: "Correo" },
      { id: "fecha", nombre: "Fecha de Nacimiento" },
      { id: "usuario", nombre: "Usuario" },
      { id: "contrasena", nombre: "Contraseña" },
      { id: "confirmar", nombre: "Confirmar contraseña" },
    ];

    campos.forEach((campo) => {
      const input = document.getElementById(campo.id) as HTMLInputElement | null;
      if (!input || input.value.trim() === "") {
        if (input) mostrarError(input, "*Este campo es obligatorio");
        valido = false;
      }
    });

    const terminos = document.getElementById("terminosCheck") as HTMLInputElement | null;
    if (!terminos?.checked) {
      if (terminos) mostrarError(terminos, "*Debes aceptar los Términos y Condiciones");
      valido = false;
    }

    if (valido) {
      console.log("Formulario válido. Puedes enviarlo.");
    }
  };

  const mostrarError = (elemento: HTMLElement, mensaje: string) => {
    const small = document.createElement("small");
    small.className = "text-danger error-msg";
    small.innerText = mensaje;
    elemento.parentNode?.appendChild(small);
  };

  return (
    <div
      className="fondocalle d-flex justify-content-center align-items-center w-100"
      style={{ backgroundImage: `url(${fondocalle})` }}
    >
      <div className="registro-container p-4">
        <div className="registro-contenido mx-auto">
          <h2 className="titulo-registro text-center mb-3">REGISTRO</h2>

          <form onSubmit={handleSubmit}>
            {/* Correo */}
            <div className="mb-3">
              <label htmlFor="correo">Correo</label>
              <input type="email" className="form-control" id="correo" />
            </div>

            {/* Fecha y Usuario */}
            <div className="d-flex justify-content-between flex-wrap mb-3 gap-2">
              <div className="form-group" style={{ flex: 1 }}>
                <label htmlFor="fecha">Fecha de Nacimiento</label>
                <input type="date" className="form-control" id="fecha" />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label htmlFor="usuario">Usuario</label>
                <input type="text" className="form-control" id="usuario" />
              </div>
            </div>

            {/* Contraseña y Confirmar */}
            <div className="d-flex justify-content-between flex-wrap mb-3 gap-2">
              <div className="form-group" style={{ flex: 1 }}>
                <label htmlFor="contrasena">Contraseña</label>
                <input type="password" className="form-control" id="contrasena" />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label htmlFor="confirmar">Confirmar contraseña</label>
                <input type="password" className="form-control" id="confirmar" />
              </div>
            </div>

            {/* Términos */}
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="terminosCheck" />
              <label className="form-check-label" htmlFor="terminosCheck">
                Acepto los <span style={{ color: "#FFD700" }}>Términos y Condiciones</span>
              </label>
            </div>

            {/* Botón */}
            <div className="text-center mb-3">
              <button type="submit" className="btn registro-btn">
                Registrarse
              </button>
            </div>
          </form>

          <p className="text-center">
            Ya tienes cuenta? <a href="#" style={{ color: "#00FFB2" }}>Inicia Sesión!</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registro;
