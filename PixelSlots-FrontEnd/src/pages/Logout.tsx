import "../css/Auth.css";
import fondocalle from "../assets/img/Fondo-calle-Arcade.gif";
import { Link, useNavigate } from "react-router-dom";
import {
  showTermsAlert,
  showLogoutAlert,
  showConnectionErrorAlert,
  showRegisterErrorAlert,
} from "../utils/alerts";
import { useState } from "react";

function Registro() {
  const [errores, setErrores] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nombreInput = document.getElementById("nombre") as HTMLInputElement;
    const usuarioInput = document.getElementById("usuario") as HTMLInputElement;
    const correoInput = document.getElementById("correo") as HTMLInputElement;
    const edadInput = document.getElementById("edad") as HTMLInputElement;
    const contrasenaInput = document.getElementById(
      "contrasena"
    ) as HTMLInputElement;
    const confirmarInput = document.getElementById(
      "confirmar"
    ) as HTMLInputElement;
    const terminosCheck = document.getElementById(
      "terminosCheck"
    ) as HTMLInputElement;

    let erroresForm: { [key: string]: string } = {};

    if (!nombreInput.value.trim())
      erroresForm.nombre = "*Este campo es obligatorio";
    if (!usuarioInput.value.trim())
      erroresForm.usuario = "*Este campo es obligatorio";
    if (!correoInput.value.trim())
      erroresForm.correo = "*Este campo es obligatorio";
    if (!edadInput.value.trim() || parseInt(edadInput.value) < 18)
      erroresForm.edad = "*Debes ser mayor de edad";
    if (!contrasenaInput.value.trim())
      erroresForm.contrasena = "*Este campo es obligatorio";
    if (contrasenaInput.value !== confirmarInput.value)
      erroresForm.confirmar = "*Las contraseñas no coinciden";
    if (!terminosCheck.checked)
      erroresForm.terminos = "*Aceptar los términos es obligatorio";

    setErrores(erroresForm);

    if (Object.keys(erroresForm).length === 0) {
      try {
        const response = await fetch("http://localhost:3000/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: nombreInput.value,
            usuario: usuarioInput.value,
            email: correoInput.value,
            edad: parseInt(edadInput.value),
            pass: contrasenaInput.value,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          if (data.error?.toLowerCase().includes("correo")) {
            setErrores({ correo: data.error });
          } else if (data.error) {
            setErrores({ general: data.error });
          } else {
            showRegisterErrorAlert(); // ✅ Alerta visual si no hay mensaje
          }
          return;
        }

        await showLogoutAlert(); // ✅ Registro exitoso
        navigate("/login");
      } catch (error) {
        console.error("Error en registro:", error);
        showConnectionErrorAlert(); // ❌ Error de red
      }
    }
  };

  return (
    <div
      className="fondocalle d-flex justify-content-center align-items-center w-100"
      style={{ backgroundImage: `url(${fondocalle})` }}
    >
      <div className="registro-container p-4">
        <div className="registro-contenido mx-auto">
          <h2 className="titulo-Auth text-center mb-3">REGISTRO</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="correo">Correo</label>
              <input type="email" className="input-arcade" id="correo" />
              {errores.correo && (
                <small className="error">{errores.correo}</small>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre Completo</label>
                <input type="text" className="input-arcade" id="nombre" />
                {errores.nombre && (
                  <small className="error">{errores.nombre}</small>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="usuario">Usuario</label>
                <input type="text" className="input-arcade" id="usuario" />
                {errores.usuario && (
                  <small className="error">{errores.usuario}</small>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="edad">Edad</label>
                <input
                  type="number"
                  className="input-arcade"
                  id="edad"
                  min="1"
                  max="100"
                />
                {errores.edad && (
                  <small className="error">{errores.edad}</small>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contrasena">Contraseña</label>
                <input
                  type="password"
                  className="input-arcade"
                  id="contrasena"
                />
                {errores.contrasena && (
                  <small className="error">{errores.contrasena}</small>
                )}
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label htmlFor="confirmar">Confirmar contraseña</label>
                <input
                  type="password"
                  className="input-arcade"
                  id="confirmar"
                />
                {errores.confirmar && (
                  <small className="error">{errores.confirmar}</small>
                )}
              </div>
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="terminosCheck"
              />
              <label className="form-check-label" htmlFor="terminosCheck">
                Acepto los{" "}
                <span
                  onClick={showTermsAlert}
                  className="me-5 link-auth"
                  role="button"
                  tabIndex={0}
                >
                  Términos y Condiciones
                </span>
              </label>
              {errores.terminos && (
                <small className="error">{errores.terminos}</small>
              )}
            </div>

            <div className="text-center mb-3">
              <button type="submit" className="auth-btn">
                REGISTRARSE
              </button>
              {errores.general && (
                <small className="error d-block mt-2">{errores.general}</small>
              )}
            </div>
          </form>

          <p className="text-center mt-3">
            Ya tienes cuenta?{" "}
            <Link to="/login" className="link-auth">
              Inicia Sesión!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registro;
