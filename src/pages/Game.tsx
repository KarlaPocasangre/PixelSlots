import "../css/Auth.css";
import fondodegradado from "../assets/img/Fondo-degradado.png";
function Game() {
  return (
    <div
      className="fondo d-flex justify-content-center align-items-center w-100"
      style={{ backgroundImage: `url(${fondodegradado})` }}
    ></div>
  );
}

export default Game;
