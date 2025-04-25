import  "../css/Game.css";
import fondodegradado from "../assets/img/Fondo-degradado.png";
import fondoMaquinas from "../assets/img/Fondo-maquinas.png";
import maquina from "../assets/img/Maquina.png";
import palanca from "../assets/img/Palanca.png";
import moneda from "../assets/img/Moneda.gif";
import palancagif from "../assets/img/Palanca.gif";


function Game() {
  return (
  <>
    <div
      className="fondo d-flex justify-content-center align-items-center w-100"
      style={{ backgroundImage: `url(${fondodegradado})` }} > 
        <div className="contenedor-maqu">
          <img src={fondoMaquinas} className="img-maqui" alt="Fondo máquinas" />
          <img src={maquina} className="img-MaquinaGrande position-absolute top-50  start-50 translate-middle w-0" alt="Máquina" />
          <img src={palanca} className="img-Palanca position-absolute" alt="Palanca" />
        </div>
        <div className="rectangulo1">
          <img src={moneda} className="icono" alt="Moneda"/>
           Puntos:<span className="valor">4</span>
         </div>
         <div className="rectangulo">
          <img src={moneda} className="icono" alt="Moneda"/>
           Fichas:<span className="valor">4</span>
         </div>
    </div> 
 </>
  );
}

export default Game;
