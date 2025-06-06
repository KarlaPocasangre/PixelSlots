import { Link, useNavigate } from "react-router-dom";
import "../css/Auth.css";
import fondocalle from "../assets/img/Fondo-calle-Arcade.gif";
import { useState } from "react";
import {
  showConsentAlert,
  showLoginAlert,
  showConnectionErrorAlert,
  showLoginErrorAlert,
} from "../utils/alerts";

function Login() {
  const [errores, setErrores] = useState<{
    correo?: string;
    contrasena?: string;
    general?: string;
  }>({});

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const correoInput = document.getElementById("correo") as HTMLInputElement;
    const contrasenaInput = document.getElementById(
      "contraseña"
    ) as HTMLInputElement;

    let erroresForm: {
      correo?: string;
      contrasena?: string;
      general?: string;
    } = {};

    if (!correoInput.value.trim()) {
      erroresForm.correo = "*Este campo es obligatorio";
    }

    if (!contrasenaInput.value.trim()) {
      erroresForm.contrasena = "*Este campo es obligatorio";
    }

    setErrores(erroresForm);

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

        localStorage.setItem("token", data.token);
        localStorage.setItem("usuarioId", data.userId);
        localStorage.setItem("fichas", data.fichas);
        localStorage.setItem("usuario", data.usuario);

        showConsentAlert(() => {
          showLoginAlert();
          navigate("/");
        });
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        showConnectionErrorAlert();
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

          <p className="text-center mt-3">
            No tienes cuenta?{" "}
            <Link to="/logout" className="link-auth">
              Regístrate!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
