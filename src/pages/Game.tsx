import React, { useState } from "react";
import "../css/Game.css";

import maquina from "../assets/img/Maquina.png";
import fondo from "../assets/img/Fondo-maquinas.png";
import palanca from "../assets/img/Palanca.png";
import palancaGif from "../assets/img/Palanca.gif";
import moneda from "../assets/img/Moneda.gif";
import estrella from "../assets/img/Estrella.gif";

import audifonos from "../assets/img/slots/Audifonos.png";
import cartucho from "../assets/img/slots/cartucho.png";
import casette from "../assets/img/slots/casette.png";
import disco from "../assets/img/slots/disco.png";
import lentes from "../assets/img/slots/Lentes.png";
import mando from "../assets/img/slots/Mando.png";
import puntero from "../assets/img/slots/Puntero.png";

function Game() {
  const items = [audifonos, cartucho, casette, disco, lentes, mando, puntero];

  const [slotImages, setSlotImages] = useState([
    audifonos,
    cartucho,
    casette,
  ]);

  const [palancaActiva, setPalancaActiva] = useState(false);

  const spinSlots = () => {
    if (palancaActiva) return; // evita doble clic

    setPalancaActiva(true);

    // Simula el giro y luego muestra nuevas imágenes
    setTimeout(() => {
      const newImages = Array.from({ length: 3 }, () =>
        items[Math.floor(Math.random() * items.length)]
      );
      setSlotImages(newImages);
      setPalancaActiva(false);
    }, 1000);
  };

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
            <img
              src={maquina}
              alt="Máquina"
              className="machine maquina-ajustada"
            />

            {/* Slot display */}
            <div className="slot-display">
              {slotImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`slot-${index}`}
                  className="slot-image"
                />
              ))}
            </div>

            {/* Palanca clickeable */}
            <img
              src={palancaActiva ? palancaGif : palanca}
              alt="Palanca"
              className="palanca"
              onClick={spinSlots}
              style={{ cursor: "pointer" }}
            />
          </div>

          {/* Panel de info */}
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
