// Importa herramientas de navegacion y estilos
import { Link, useNavigate } from "react-router-dom";
import "../css/Auth.css";

// Imagen de fondo para la pantalla de login
import fondocalle from "../assets/img/Fondo-calle-Arcade.gif";

// Importa React y useState para manejar estado
import { useState } from "react";

// Importa funciones de alerta
import {
  showConsentAlert,
  showLoginAlert,
  showConnectionErrorAlert,
  showLoginErrorAlert,
} from "../utils/alerts";

function Login() {
  // Estado para manejar errores del formulario
  const [errores, setErrores] = useState<{
    correo?: string;
    contrasena?: string;
    general?: string;
  }>({});

  const navigate = useNavigate(); // Hook para redireccionar a otra pagina

  // Maneja el envio del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Obtiene los valores de los campos de entrada
    const correoInput = document.getElementById("correo") as HTMLInputElement;
    const contrasenaInput = document.getElementById(
      "contraseña"
    ) as HTMLInputElement;

    // Objeto para guardar errores del formulario
    let erroresForm: {
      correo?: string;
      contrasena?: string;
      general?: string;
    } = {};

    // Validacion: los campos no deben estar vacios
    if (!correoInput.value.trim()) {
      erroresForm.correo = "*Este campo es obligatorio";
    }

    if (!contrasenaInput.value.trim()) {
      erroresForm.contrasena = "*Este campo es obligatorio";
    }

    // Actualiza el estado con errores encontrados
    setErrores(erroresForm);

    // Si no hay errores, se envia la solicitud al servidor
    if (Object.keys(erroresForm).length === 0) {
      try {
        const response = await fetch("https://pixelslotsgame.com/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: correoInput.value,
            pass: contrasenaInput.value,
          }),
        });

        const data = await response.json();

        // Si la respuesta tiene error, se muestra el mensaje correspondiente
        if (!response.ok) {
          if (data.error?.toLowerCase().includes("correo")) {
            setErrores({ correo: data.error });
          } else if (data.error?.toLowerCase().includes("contraseña")) {
            setErrores({ contrasena: data.error });
          } else {
            showLoginErrorAlert();
          }
          return;
        }

        // Si todo sale bien, se guardan los datos del usuario
        localStorage.setItem("token", data.token);
        localStorage.setItem("usuarioId", data.userId);
        localStorage.setItem("fichas", data.fichas);
        localStorage.setItem("usuario", data.usuario);

        // Muestra alertas de consentimiento y login, luego redirige al home
        showConsentAlert(() => {
          showLoginAlert();
          navigate("/");
        });
      } catch (error) {
        console.error("Error al iniciar sesion:", error);
        showConnectionErrorAlert(); // Si falla la conexion, muestra alerta
      }
    }
  };

  return (
    <div
      className="fondocalle d-flex justify-content-center align-items-center w-100"
      style={{ backgroundImage: `url(${fondocalle})`, minHeight: "100vh" }}
    >
      <div className="login-container1 p-4">
        <div className="login-contenido mx-auto">
          <h2 className="titulo-Auth text-center mb-3">LOGIN</h2>

          {/* Formulario de inicio de sesion */}
          <form onSubmit={handleSubmit}>
            <div className="form-group-arcade">
              <label htmlFor="correo">Correo</label>
              <input
                type="email"
                id="correo"
                className="input-arcade"
                onChange={() =>
                  setErrores((prev) => ({ ...prev, correo: undefined }))
                }
              />
              {errores.correo && (
                <small className="error">{errores.correo}</small>
              )}
            </div>

            <div className="form-group-arcade">
              <label htmlFor="contraseña">Contraseña</label>
              <input
                type="password"
                id="contraseña"
                className="input-arcade"
                onChange={() =>
                  setErrores((prev) => ({ ...prev, contrasena: undefined }))
                }
              />
              {errores.contrasena && (
                <small className="error">{errores.contrasena}</small>
              )}
              {errores.general && (
                <small className="error">{errores.general}</small>
              )}
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="auth-btn">
                ENTRAR
              </button>
            </div>
          </form>

          {/* Enlace para registrarse si no tiene cuenta */}
          <p className="text-center mt-3">
            No tienes cuenta?{" "}
            <Link to="/logout" className="link-auth">
              Registrate!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
