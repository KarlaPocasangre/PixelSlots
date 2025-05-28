import { useState } from "react";
import "../css/Game.css";
import Maquina from "../assets/img/Maquina-Arcade.png";
import Palanca from "../assets/img/Palanca.png";
import PalancaGif from "../assets/img/Palanca.gif";
import Moneda from "../assets/img/Moneda.gif";
import Estrella from "../assets/img/Estrella.gif";

function Game() {
  const [palancaActiva, setPalancaActiva] = useState(false);

  const handlePalancaClick = () => {
    setPalancaActiva(true);
    setTimeout(() => {
      setPalancaActiva(false);
    }, 1000);
  };

  return (
    <div className="game-container">
      {/* ✅ HUD fijo en pantalla */}
      <div className="hud-panel">
        <div className="hud-item">
          <img src={Moneda} alt="Fichas" className="hud-icon" />
          <span className="hud-label">Fichas:</span>
          <span className="hud-value">5</span>
        </div>
        <div className="hud-item">
          <img src={Estrella} alt="Puntos" className="hud-icon" />
          <span className="hud-label">Puntos:</span>
          <span className="hud-value">100000000</span>
        </div>
      </div>

      {/* Máquina arcade */}
      <div className="machine-wrapper animate__animated animate__fadeInUp">
        <div className="machine-relative">
          <img src={Maquina} alt="Máquina Arcade" className="game-maquina" />

          <img
            src={palancaActiva ? PalancaGif : Palanca}
            alt="Palanca"
            className="palanca"
            onClick={handlePalancaClick}
          />

          <div className="texto-comenzar">Comenzar...</div>
        </div>
      </div>
    </div>
  );
}

export default Game;
