import { useMemo, useState } from "react";
import "../css/Game.css";
import "animate.css";
import confetti from "canvas-confetti";

import sonidoPalanca from "../assets/sounds/coin.mp3";
import sonidoVictoria from "../assets/sounds/victory.mp3";

import Maquina from "../assets/img/Maquina-Arcade.png";
import Palanca from "../assets/img/Palanca.png";
import PalancaGif from "../assets/img/Palanca.gif";
import Moneda from "../assets/img/Moneda.gif";
import Estrella from "../assets/img/Estrella.gif";

import Audifonos from "../assets/img/slots/Audifonos.png";
import Cartucho from "../assets/img/slots/cartucho.png";
import Casette from "../assets/img/slots/casette.png";
import Disco from "../assets/img/slots/disco.png";
import Lentes from "../assets/img/slots/Lentes.png";
import Mando from "../assets/img/slots/Mando.png";
import Puntero from "../assets/img/slots/puntero.png";

function Game() {
  const simbolos = [
    Audifonos,
    Cartucho,
    Casette,
    Disco,
    Lentes,
    Mando,
    Puntero,
  ];

  const audioPalanca = useMemo(() => new Audio(sonidoPalanca), []);
  const audioVictoria = useMemo(() => new Audio(sonidoVictoria), []);

  const [palancaActiva, setPalancaActiva] = useState(false);
  const [mostrarTexto, setMostrarTexto] = useState(true);
  const [mostrarCombinacion, setMostrarCombinacion] = useState(false);
  const [slot1, setSlot1] = useState(Audifonos);
  const [slot2, setSlot2] = useState(Cartucho);
  const [slot3, setSlot3] = useState(Casette);

  const [animarSlot1, setAnimarSlot1] = useState(false);
  const [animarSlot2, setAnimarSlot2] = useState(false);
  const [animarSlot3, setAnimarSlot3] = useState(false);

  const lanzarConfetiSimple = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      decay: 0.9,
      colors: ["#ffcc00", "#ffffff"],
    });
  };

  const lanzarConfetiIntenso = () => {
    let count = 5;
    const burst = () => {
      if (count > 0) {
        confetti({
          particleCount: 60,
          spread: 80,
          origin: { y: 0.6 },
          decay: 0.88,
          colors: ["#ff00ff", "#00ffff", "#ffcc00", "#ffffff"],
        });
        count--;
        setTimeout(burst, 200);
      }
    };
    burst();
  };

  const handlePalancaClick = () => {
    if (!mostrarCombinacion) {
      setMostrarTexto(false);
      setMostrarCombinacion(true);
    }

    // Resetear animaciones
    setAnimarSlot1(false);
    setAnimarSlot2(false);
    setAnimarSlot3(false);

    audioPalanca.currentTime = 0;
    audioPalanca.play();
    setPalancaActiva(true);

    const interval1 = setInterval(() => {
      setSlot1(simbolos[Math.floor(Math.random() * simbolos.length)]);
    }, 100);
    const interval2 = setInterval(() => {
      setSlot2(simbolos[Math.floor(Math.random() * simbolos.length)]);
    }, 100);
    const interval3 = setInterval(() => {
      setSlot3(simbolos[Math.floor(Math.random() * simbolos.length)]);
    }, 100);

    setTimeout(() => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);

      const final1 = simbolos[Math.floor(Math.random() * simbolos.length)];
      const final2 = simbolos[Math.floor(Math.random() * simbolos.length)];
      const final3 = simbolos[Math.floor(Math.random() * simbolos.length)];

      setSlot1(final1);
      setSlot2(final2);
      setSlot3(final3);

      // Activar animaciones visuales
      setTimeout(() => {
        setAnimarSlot1(true);
        setAnimarSlot2(true);
        setAnimarSlot3(true);
      }, 100);

      if (final1 === final2 && final2 === final3) {
        audioVictoria.currentTime = 0;
        audioVictoria.play();
        lanzarConfetiIntenso();
      } else if (final1 === final2 || final1 === final3 || final2 === final3) {
        lanzarConfetiSimple();
      }

      setPalancaActiva(false);
    }, 1000);
  };

  return (
    <div className="game-container">
      <div className="hud-panel animate__animated animate__fadeInUp">
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

      <div className="machine-wrapper animate__animated animate__fadeInUp">
        <div className="machine-relative">
          <img src={Maquina} alt="Máquina Arcade" className="game-maquina" />

          {mostrarCombinacion && (
            <div className="slot-display">
              <img
                src={slot1}
                alt="Slot 1"
                className={`slot-icon ${
                  animarSlot1 ? "animate__animated animate__pulse" : ""
                }`}
              />
              <img
                src={slot2}
                alt="Slot 2"
                className={`slot-icon ${
                  animarSlot2 ? "animate__animated animate__pulse" : ""
                }`}
              />
              <img
                src={slot3}
                alt="Slot 3"
                className={`slot-icon ${
                  animarSlot3 ? "animate__animated animate__pulse" : ""
                }`}
              />
            </div>
          )}

          <img
            src={palancaActiva ? PalancaGif : Palanca}
            alt="Palanca"
            className="palanca"
            onClick={handlePalancaClick}
          />

          {mostrarTexto && <div className="texto-comenzar">Comenzar...</div>}
        </div>
      </div>
    </div>
  );
}

export default Game;
