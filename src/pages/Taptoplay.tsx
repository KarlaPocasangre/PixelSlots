import "../css/Taptoplay.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fondocalle from "../assets/img/Fondo-calle-Arcade.gif";

function Taptoplay() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = () => navigate("/");

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [navigate]);

  return (
    <div
      className="calle-arcade"
      style={{ backgroundImage: `url(${fondocalle})` }}
    >
      <div className="contenedor-texto">
        <h1 className="pixel-title">START</h1>
        <p className="pixel-subtitle">GAME</p>
        <p className="pixel-p blink">Presione para continuar</p>
      </div>
    </div>
  );
}

export default Taptoplay;
