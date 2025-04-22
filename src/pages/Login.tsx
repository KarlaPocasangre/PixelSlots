import "../css/Auth.css";
import fondocalle from "../assets/img/Fondo-calle-Arcade.gif";

function Login() {
  return (
    <div
      className="fondocalle d-flex justify-content-center align-items-center w-100"
      style={{ backgroundImage: `url(${fondocalle})` }}
    >
      <h1>login</h1>
    </div>
  );
}

export default Login;
