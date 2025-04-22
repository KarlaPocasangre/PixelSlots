import "../css/Auth.css";
import fondocalle from "../assets/img/Fondo-calle-Arcade.gif";

function Logout() {
  return (
    <div
      className="fondocalle d-flex justify-content-center align-items-center w-100"
      style={{ backgroundImage: `url(${fondocalle})` }}
    >
      <h1>logout</h1>
    </div>
  );
}

export default Logout;
