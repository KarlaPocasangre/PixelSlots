import { Link } from "react-router-dom";
import "../css/Login.css";
import fondocalle from "../assets/img/Fondo-calle-Arcade.gif";
import { useState } from "react";

function Login() {
  const [errores, setErrores] = useState<{ correo?: string; contrasena?: string }>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const correoInput = document.getElementById("correo") as HTMLInputElement;
    const contrasenaInput = document.getElementById("contraseña") as HTMLInputElement;

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
      <div className="login-container1 p-4">
        <div className="login-contenido mx-auto">
          <h2 className="registro text-center mb-3" >
            LOGIN
          </h2>

        
          <form onSubmit={handleSubmit}>
              <div className="form-group-arcade">
                <label htmlFor="correo">Correo</label>
                <input type="email" id="correo" className="input-arcade" />
                {errores.correo && <small className="error">{errores.correo}</small>}
              </div>

              <div className="form-group-arcade">
                <label htmlFor="contraseña">Contraseña</label>
                <input type="password" id="contraseña" className="input-arcade" />
                {errores.contrasena && <small className="error">{errores.contrasena}</small>}
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="boton">ENTRAR</button>
              </div>
            </form>


          <p className="text-center mt-3">
            No tienes cuenta?{" "}
            <Link to="/logout" style={{ color: "#FFD700" }}>
              Regístrate!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
