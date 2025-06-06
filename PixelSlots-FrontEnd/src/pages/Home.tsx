import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import fondo from "../assets/img/Fondo-maquinas.png";
import logohome from "../assets/img/Logo-PixelSlots.png";
import emojigafas from "../assets/img/emoji-sorprendido.png";
import { showTutorialAlert, showGameAlert } from "../utils/alerts";

import "animate.css";
import "../css/Home.css";

function Home() {
  const playBtnRef = useRef(null);
  const tutorialBtnRef = useRef(null);
  const emojiRef = useRef(null);
  const logoRef = useRef(null);

  const handleAnimation = (ref: any) => {
    if (ref.current) {
      ref.current.classList.remove("animate__animated", "animate__rubberBand");
      void ref.current.offsetWidth; // Reinicia la animación
      ref.current.classList.add("animate__animated", "animate__rubberBand");
    }
  };

  useEffect(() => {
    const usuarioId = localStorage.getItem("usuarioId");
    if (
      usuarioId &&
      !localStorage.getItem(`alertaFichasMostrada_${usuarioId}`)
    ) {
      showGameAlert();
      localStorage.setItem(`alertaFichasMostrada_${usuarioId}`, "true");
    }
  }, []);

  return (
    <div
      className="fondo d-flex justify-content-center align-items-center w-100"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="container-main text-center">
        <img
          ref={logoRef}
          className="logohome"
          src={logohome}
          alt="Logo"
          onMouseEnter={() => handleAnimation(logoRef)}
        />
        <p className="text-home">
          Pon a prueba tu suerte en este emocionante juego de tragamonedas
          estilo retro. Gira los carretes, consigue combinaciones ganadoras y
          alcanza la mejor puntuación!
        </p>
        <img
          ref={emojiRef}
          className="emojigafas"
          onMouseEnter={() => handleAnimation(emojiRef)}
          src={emojigafas}
          alt="EmojiGafas"
        />
        <p className="text-center">¡¿Podrás alcanzar la mejor puntuación?!</p>

        <div className="mt-4">
          <Link
            className="btn btn-primary"
            to="/game"
            role="button"
            ref={playBtnRef}
            onMouseEnter={() => handleAnimation(playBtnRef)}
          >
            🎮 JUGAR AHORA
          </Link>
          <button
            className="btn btn-primary"
            ref={tutorialBtnRef}
            onClick={() => {
              handleAnimation(tutorialBtnRef);
              showTutorialAlert();
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
