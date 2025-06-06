import { useMemo, useEffect, useState } from "react";
import "../css/Game.css";
import "animate.css";
import confetti from "canvas-confetti";
import {
  showGameOver,
  showPuntos0Alert,
  showPuntosGanadosAlert,
  showTripleComboAlert,
  showTutorialAlert,
} from "../utils/alerts";

import sonidoPalanca from "../assets/sounds/coin.mp3";
import sonidoVictoria from "../assets/sounds/victory.mp3";

import Maquina from "../assets/img/Maquina-Arcade.png";
import Palanca from "../assets/img/Palanca.png";
import PalancaGif from "../assets/img/Palanca.gif";
import Moneda from "../assets/img/Moneda.gif";
import Estrella from "../assets/img/Estrella.gif";

import Audifonos from "../assets/img/slots/audifonos.png";
import Cartucho from "../assets/img/slots/cartucho.png";
import Casette from "../assets/img/slots/casette.png";
import Disco from "../assets/img/slots/disco.png";
import Lentes from "../assets/img/slots/lentes.png";
import Mando from "../assets/img/slots/mando.png";
import Puntero from "../assets/img/slots/puntero.png";

function Game() {
  const simbolos = [
    { nombre: "Audifono", imagen: Audifonos },
    { nombre: "Cartucho", imagen: Cartucho },
    { nombre: "Cassete", imagen: Casette },
    { nombre: "Disco", imagen: Disco },
    { nombre: "Lentes", imagen: Lentes },
    { nombre: "Mando", imagen: Mando },
    { nombre: "Puntero", imagen: Puntero },
  ];

  const audioPalanca = useMemo(() => new Audio(sonidoPalanca), []);
  const audioVictoria = useMemo(() => new Audio(sonidoVictoria), []);

  const [palancaActiva, setPalancaActiva] = useState(false);
  const [mostrarTexto, setMostrarTexto] = useState(true);
  const [mostrarCombinacion, setMostrarCombinacion] = useState(false);

  const [slot1, setSlot1] = useState(simbolos[0].imagen);
  const [slot2, setSlot2] = useState(simbolos[1].imagen);
  const [slot3, setSlot3] = useState(simbolos[2].imagen);

  const [animarSlot1, setAnimarSlot1] = useState(false);
  const [animarSlot2, setAnimarSlot2] = useState(false);
  const [animarSlot3, setAnimarSlot3] = useState(false);
  const [fichas, setFichas] = useState<number | null>(null);
  const [totalPuntaje, setTotalPuntaje] = useState<number>(0);
  const [jugando, setJugando] = useState(false);

  useEffect(() => {
    const usuarioId = localStorage.getItem("usuarioId");
    const key = `tutorialMostrado_${usuarioId}`;

    if (usuarioId && !localStorage.getItem(key)) {
      showTutorialAlert();
      localStorage.setItem(key, "true");
    }

    const token = localStorage.getItem("token");
    const fichasGuardadas = localStorage.getItem("fichas");
    if (fichasGuardadas) setFichas(parseInt(fichasGuardadas));

    if (token) {
      fetch("https://pixelslotsgame.com/api/puntaje-total", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.totalPuntaje !== undefined && !isNaN(data.totalPuntaje)) {
            setTotalPuntaje(data.totalPuntaje);
          }
        })
        .catch((err) => console.error("Error al cargar puntos:", err));
    }
  }, []);

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

  const handlePalancaClick = async () => {
    if (jugando) return;
    if (fichas === 0) {
      showGameOver();
      return;
    }
    setJugando(true);

    if (!mostrarCombinacion) {
      setMostrarTexto(false);
      setMostrarCombinacion(true);
    }

    setAnimarSlot1(false);
    setAnimarSlot2(false);
    setAnimarSlot3(false);

    audioPalanca.currentTime = 0;
    audioPalanca.play();
    setPalancaActiva(true);

    const interval1 = setInterval(
      () =>
        setSlot1(simbolos[Math.floor(Math.random() * simbolos.length)].imagen),
      100
    );
    const interval2 = setInterval(
      () =>
        setSlot2(simbolos[Math.floor(Math.random() * simbolos.length)].imagen),
      100
    );
    const interval3 = setInterval(
      () =>
        setSlot3(simbolos[Math.floor(Math.random() * simbolos.length)].imagen),
      100
    );

    setTimeout(async () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);

      const final1 = simbolos[Math.floor(Math.random() * simbolos.length)];
      const final2 = simbolos[Math.floor(Math.random() * simbolos.length)];
      const final3 = simbolos[Math.floor(Math.random() * simbolos.length)];

      setSlot1(final1.imagen);
      setSlot2(final2.imagen);
      setSlot3(final3.imagen);

      try {
        const token = localStorage.getItem("token");

        const res = await fetch("https://pixelslotsgame.com/api/jugar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            simbolos: [final1.nombre, final2.nombre, final3.nombre],
          }),
        });

        const data = await res.json();

        if (res.ok) {
          if (data.puntajeGanado >= 1300) {
            audioVictoria.currentTime = 0;
            audioVictoria.play();
            lanzarConfetiIntenso();
            showTripleComboAlert(data.puntajeGanado);
          } else if (data.puntajeGanado > 0) {
            lanzarConfetiSimple();
            showPuntosGanadosAlert(data.puntajeGanado);
          }

          setFichas(data.fichasRestantes);
          setTotalPuntaje(data.puntajeTotal);
          localStorage.setItem("fichas", data.fichasRestantes.toString());

          if (data.puntajeGanado === 0) {
            showPuntos0Alert();
          }
        } else {
          alert(data.error || "Error al procesar el juego.");
        }
      } catch (err) {
        console.error(err);
        alert("No se pudo conectar al servidor.");
      }

      setTimeout(() => {
        setAnimarSlot1(true);
        setAnimarSlot2(true);
        setAnimarSlot3(true);
        setPalancaActiva(false);
        setJugando(false);
      }, 100);
    }, 1000);
  };

  return (
    <div className="game-container">
      <div className="hud-panel animate__animated animate__fadeInUp">
        <div className="hud-item">
          <img src={Estrella} alt="Puntos" className="hud-icon" />
          <span className="hud-label">Puntos:</span>
          <span className="hud-value">{totalPuntaje}</span>
        </div>
        <div className="hud-item">
          <img src={Moneda} alt="Fichas" className="hud-icon" />
          <span className="hud-label">Fichas:</span>
          <span className="hud-value">{fichas ?? "Cargando..."}</span>
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
            className={`palanca ${jugando ? "deshabilitada" : ""}`}
            onClick={handlePalancaClick}
          />

          {mostrarTexto && <div className="texto-comenzar">Comenzar...</div>}
        </div>
      </div>
    </div>
  );
}

export default Game;
