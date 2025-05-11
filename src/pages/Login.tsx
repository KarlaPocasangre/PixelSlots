import "../css/Login.css";
import fondocalle from "../assets/img/Fondo-calle-Arcade.gif";
import { useState } from "react";

function Login() {
  const [errores, setErrores] = useState<{ correo?: string; contrasena?: string }>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const correoInput = document.getElementById("correo") as HTMLInputElement;
    const contrasenaInput = document.getElementById("contrasena") as HTMLInputElement;

    let erroresForm: { correo?: string; contrasena?: string } = {};

    if (!correoInput.value.trim()) {
      erroresForm.correo = "*Este campo es obligatorio";
    } else if (correoInput.value !== "Ejemplo@correo.com") {
      erroresForm.correo = "*Usuario incorrecto";
    }

    if (!contrasenaInput.value.trim()) {
      erroresForm.contrasena = "*Este campo es obligatorio";
    } else if (contrasenaInput.value !== "Contrasena123") {
      erroresForm.contrasena = "*Contraseña incorrecta";
    }

    setErrores(erroresForm);

    if (Object.keys(erroresForm).length === 0) {
      console.log("Iniciando sesión...");
      // Aquí puedes redirigir o continuar con la autenticación
    }
  };

  return (
    <div
      className="fondocalle d-flex justify-content-center align-items-center w-100"
      style={{ backgroundImage: `url(${fondocalle})`, minHeight: "100vh" }}
    >
      <div className="login-container p-4">
        <div className="login-contenido mx-auto">
          <h2 className="titulo-registro text-center mb-3" style={{ color: "#FFE448", fontSize: "45px" }}>
            LOGIN
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Correo</label>
              <input type="email" className="form-control" id="correo" />
              {errores.correo && <small className="text-danger error-msg">{errores.correo}</small>}
            </div>

            <div className="mb-3">
              <label>Contraseña</label>
              <input type="password" className="form-control" id="contrasena" />
              {errores.contrasena && <small className="text-danger error-msg">{errores.contrasena}</small>}
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: "#FF42FF",
                  color: "white",
                  width: "150px",
                }}
              >
                ENTRAR
              </button>
            </div>
          </form>

          <p className="text-center mt-3">
            No tienes cuenta?{" "}
            <a href="#" style={{ color: "#FFD700" }}>
              Regístrate!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
