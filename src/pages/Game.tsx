import "../css/Game.css";

import maquina from "../assets/img/Maquina.png";
import fondo from "../assets/img/Fondo-maquinas.png";
import palanca from "..//assets/img/Palanca.png";
import palancaGif from "..//assets/img/Palanca.gif";
import moneda from "../assets/img/Moneda.gif";
import estrella from "../assets/img/Estrella.gif";

function Game() {
  return (
    <div className="game-viewport">
      <div
        className="background"
        style={{
          backgroundImage: `url(${fondo})`,
        }}
      >
        <div className="content">
          <div className="machine-wrapper">
            {/* ✅ Clase ajustada */}
            <img src={maquina} alt="Máquina" className="machine maquina-ajustada" />
            <img src={palanca} alt="Palanca" className="palanca" />
          </div>

            <div className="info-panel info-ajustada">
                  <div className="info-box">
                    <img src={moneda} className="icono" alt="Fichas" />
                    Fichas: <span className="valor">4</span>
                  </div>
            <div className="info-box">
              <img src={estrella} className="icono" alt="Puntos" />
              Puntos: <span className="valor">1000</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Game;
