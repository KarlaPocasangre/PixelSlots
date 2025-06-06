// Importación de hooks y utilidades
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// Imágenes y estilos
import fondo from "../assets/img/Fondo-maquinas.png";
import logohome from "../assets/img/Logo-PixelSlots.png";
import emojigafas from "../assets/img/emoji-sorprendido.png";
import { showTutorialAlert, showGameAlert } from "../utils/alerts";

import "animate.css";
import "../css/Home.css";

function Home() {
  // Referencias a los elementos interactivos para controlar animaciones
  const playBtnRef = useRef(null);
  const tutorialBtnRef = useRef(null);
  const emojiRef = useRef(null);
  const logoRef = useRef(null);

  // Función para reiniciar y aplicar una animación usando animate.css
  const handleAnimation = (ref: any) => {
    if (ref.current) {
      ref.current.classList.remove("animate__animated", "animate__rubberBand");
      void ref.current.offsetWidth; // Forzar reflujo para reiniciar animación
      ref.current.classList.add("animate__animated", "animate__rubberBand");
    }
  };

  // Al cargar la pantalla, se muestra una alerta solo una vez por usuario
  useEffect(() => {
    const usuarioId = localStorage.getItem("usuarioId");
    if (
      usuarioId &&
      !localStorage.getItem(`alertaFichasMostrada_${usuarioId}`)
    ) {
      showGameAlert(); // Muestra una alerta de bienvenida o fichas
      localStorage.setItem(`alertaFichasMostrada_${usuarioId}`, "true");
    }
  }, []);

  return (
    <div
      // Fondo de pantalla con imagen personalizada
      className="fondo d-flex justify-content-center align-items-center w-100"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="container-main text-center">
        {/* Logo principal del juego */}
        <img
          ref={logoRef}
          className="logohome"
          src={logohome}
          alt="Logo"
          onMouseEnter={() => handleAnimation(logoRef)} // Aplica animación al pasar el mouse
        />

        {/* Texto descriptivo del juego */}
        <p className="text-home">
          Pon a prueba tu suerte en este emocionante juego de tragamonedas
          estilo retro. Gira los carretes, consigue combinaciones ganadoras y
          alcanza la mejor puntuación!
        </p>

        {/* Emoji decorativo con animación al pasar el mouse */}
        <img
          ref={emojiRef}
          className="emojigafas"
          onMouseEnter={() => handleAnimation(emojiRef)}
          src={emojigafas}
          alt="EmojiGafas"
        />
        <p className="text-center">¡¿Podrás alcanzar la mejor puntuación?!</p>

        {/* Botones de navegación */}
        <div className="mt-4">
          {/* Botón para iniciar el juego */}
          <Link
            className="btn btn-primary"
            to="/game"
            role="button"
            ref={playBtnRef}
            onMouseEnter={() => handleAnimation(playBtnRef)}
          >
            🎮 JUGAR AHORA
          </Link>

          {/* Botón para ver el tutorial */}
          <button
            className="btn btn-primary"
            ref={tutorialBtnRef}
            onClick={() => {
              handleAnimation(tutorialBtnRef);
              showTutorialAlert(); // Muestra el tutorial al hacer clic
            }}
            onMouseEnter={() => handleAnimation(tutorialBtnRef)}
          >
            📖 VER TUTORIAL
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
