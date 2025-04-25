import "../css/Auth.css";
import fondocalle from "../assets/img/Fondo-calle-Arcade.gif";

function TouchPlay() {
  return (
    <div
      className="fondocalle d-flex  w-100"
      style={{ backgroundImage: `url(${fondocalle})` }}
    >
      <div className="row">
        <div className="col">
          <h1 className="display-2  text-danger text-light">START GAME</h1>
          <h2 className="fs-4 text-light">Toca para empezar</h2>
        </div>
      </div>
    </div>
  );
}

export default TouchPlay;
