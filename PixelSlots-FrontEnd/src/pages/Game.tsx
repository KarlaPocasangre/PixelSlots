// Importación de hooks y estilos
import { useMemo, useEffect, useState } from "react";
import "../css/Game.css";
import "animate.css";
import confetti from "canvas-confetti";

// Importación de funciones de alerta personalizadas
import {
  showGameOver,
  showPuntos0Alert,
  showPuntosGanadosAlert,
  showTripleComboAlert,
  showTutorialAlert,
} from "../utils/alerts";

// Importación de sonidos
import sonidoPalanca from "../assets/sounds/coin.mp3";
import sonidoVictoria from "../assets/sounds/victory.mp3";

// Importación de imágenes
import Maquina from "../assets/img/Maquina-Arcade.png";
import Palanca from "../assets/img/Palanca.png";
import PalancaGif from "../assets/img/Palanca.gif";
import Moneda from "../assets/img/Moneda.gif";
import Estrella from "../assets/img/Estrella.gif";

// Importación de íconos para los slots
import Audifonos from "../assets/img/slots/audifonos.png";
import Cartucho from "../assets/img/slots/cartucho.png";
import Casette from "../assets/img/slots/casette.png";
import Disco from "../assets/img/slots/disco.png";
import Lentes from "../assets/img/slots/lentes.png";
import Mando from "../assets/img/slots/mando.png";
import Puntero from "../assets/img/slots/puntero.png";

function Game() {
  // Definición de los símbolos posibles para los slots
  const simbolos = [
    { nombre: "Audifono", imagen: Audifonos },
    { nombre: "Cartucho", imagen: Cartucho },
    { nombre: "Cassete", imagen: Casette },
    { nombre: "Disco", imagen: Disco },
    { nombre: "Lentes", imagen: Lentes },
    { nombre: "Mando", imagen: Mando },
    { nombre: "Puntero", imagen: Puntero },
  ];

  // Inicialización de sonidos usando useMemo para evitar recarga en cada render
  const audioPalanca = useMemo(() => new Audio(sonidoPalanca), []);
  const audioVictoria = useMemo(() => new Audio(sonidoVictoria), []);

  // Estados del juego
  const [palancaActiva, setPalancaActiva] = useState(false);
  const [mostrarTexto, setMostrarTexto] = useState(true);
  const [mostrarCombinacion, setMostrarCombinacion] = useState(false);

  // Estados de cada slot individual
  const [slot1, setSlot1] = useState(simbolos[0].imagen);
  const [slot2, setSlot2] = useState(simbolos[1].imagen);
  const [slot3, setSlot3] = useState(simbolos[2].imagen);

  // Control de animaciones en los slots
  const [animarSlot1, setAnimarSlot1] = useState(false);
  const [animarSlot2, setAnimarSlot2] = useState(false);
  const [animarSlot3, setAnimarSlot3] = useState(false);

  // Control de fichas y puntaje
  const [fichas, setFichas] = useState<number | null>(null);
  const [totalPuntaje, setTotalPuntaje] = useState<number>(0);
  const [jugando, setJugando] = useState(false); // Previene múltiples clics simultáneos

  // Al cargar el componente
  useEffect(() => {
    const usuarioId = localStorage.getItem("usuarioId");
    const key = `tutorialMostrado_${usuarioId}`;

    // Muestra el tutorial si es la primera vez que juega
    if (usuarioId && !localStorage.getItem(key)) {
      showTutorialAlert();
      localStorage.setItem(key, "true");
    }

    // Recupera las fichas y el puntaje total del servidor
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

  // Función para lanzar confeti simple
  const lanzarConfetiSimple = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      decay: 0.9,
      colors: ["#ffcc00", "#ffffff"],
    });
  };

  // Función para lanzar confeti más intenso con varios estallidos
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

  // Función principal del juego al presionar la palanca
  const handlePalancaClick = async () => {
    if (jugando) return; // Evita que se juegue mientras se está ejecutando otra ronda
    if (fichas === 0) {
      showGameOver(); // Si no hay fichas, muestra alerta de game over
      return;
    }
    setJugando(true); // Bloquea la acción mientras se juega

    // Cambia el texto inicial por los slots
    if (!mostrarCombinacion) {
      setMostrarTexto(false);
      setMostrarCombinacion(true);
    }

    // Reinicia animaciones
    setAnimarSlot1(false);
    setAnimarSlot2(false);
    setAnimarSlot3(false);

    // Reproduce sonido de la palanca
    audioPalanca.currentTime = 0;
    audioPalanca.play();
    setPalancaActiva(true);

    // Comienza a girar los slots rápidamente
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

    // Detiene los slots después de 1 segundo y determina el resultado
    setTimeout(async () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);

      // Selecciona aleatoriamente los símbolos finales
      const final1 = simbolos[Math.floor(Math.random() * simbolos.length)];
      const final2 = simbolos[Math.floor(Math.random() * simbolos.length)];
      const final3 = simbolos[Math.floor(Math.random() * simbolos.length)];

      // Actualiza la UI con los símbolos finales
      setSlot1(final1.imagen);
      setSlot2(final2.imagen);
      setSlot3(final3.imagen);

      try {
        const token = localStorage.getItem("token");

        // Envia la jugada al servidor para evaluar el puntaje
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
          // Según el puntaje, lanza efectos y muestra alertas
          if (data.puntajeGanado >= 1300) {
            audioVictoria.currentTime = 0;
            audioVictoria.play();
            lanzarConfetiIntenso();
            showTripleComboAlert(data.puntajeGanado);
          } else if (data.puntajeGanado > 0) {
            lanzarConfetiSimple();
            showPuntosGanadosAlert(data.puntajeGanado);
          }

          // Actualiza fichas y puntaje en estado y almacenamiento local
          setFichas(data.fichasRestantes);
          setTotalPuntaje(data.puntajeTotal);
          localStorage.setItem("fichas", data.fichasRestantes.toString());

          // Muestra alerta si no se ganó nada
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

      // Vuelve a activar animaciones de slots y desbloquea el botón
      setTimeout(() => {
        setAnimarSlot1(true);
        setAnimarSlot2(true);
        setAnimarSlot3(true);
        setPalancaActiva(false);
        setJugando(false);
      }, 100);
    }, 1000);
  };

  // Renderizado de la interfaz del juego
  return (
    <div className="game-container">
      {/* Panel superior con puntaje y fichas */}
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

      {/* Contenedor de la máquina */}
      <div className="machine-wrapper animate__animated animate__fadeInUp">
        <div className="machine-relative">
          <img src={Maquina} alt="Máquina Arcade" className="game-maquina" />

          {/* Slots con símbolos */}
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

          {/* Imagen de la palanca (estática o en movimiento) */}
          <img
            src={palancaActiva ? PalancaGif : Palanca}
            alt="Palanca"
            className={`palanca ${jugando ? "deshabilitada" : ""}`}
            onClick={handlePalancaClick}
          />

          {/* Texto inicial "Comenzar..." */}
          {mostrarTexto && <div className="texto-comenzar">Comenzar...</div>}
        </div>
      </div>
    </div>
  );
}

export default Game;
