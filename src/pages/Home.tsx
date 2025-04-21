import { Link } from "react-router-dom";
import fondo from "../assets/img/Fondo-maquinas.png";
import logohome from "../assets/img/logo-prueba.png";
import emojigafas from "../assets/img/emoji-gafas-de-sol.png";

import "../css/Home.css";

function Home() {
  return (
    <div
      className="fondo d-flex justify-content-center align-items-center w-100"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="container-main  text-center">
        <img className="logohome" src={logohome} alt="Logo" />
        <p className="Bienvenida">!Bienvenido a Pixel Slots!</p>
        <img className="emojigafas" src={emojigafas} alt="EmojiGafas" />
        <p className="text-home">
          Pon a prueba tu suerte en este emocionante juego de tragamonedas
          estilo retro. Gira los carretes, consigue combinaciones ganadoras y
          alcanza la mejor puntuación!
        </p>
        <p className="text-center">¡¿Podrás alcanzar la mejor puntuación?!</p>
        <div className="mt-4">
          <Link className="btn btn-primary" to="/game" role="button">
            🎮 JUGAR AHORA
          </Link>
          <button className="btn btn-primary">📖 VER TUTORIAL</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
