// Importa los estilos del componente de carga
import "../css/Loading.css";

// Importa las imagenes que se muestran mientras se carga
import Loadingimg from "../assets/img/Personaje-color.png"; // Imagen estatica del personaje
import Loadinggif from "../assets/img/Corazones-speed.gif"; // Gif animado de corazones

function Loading() {
  return (
    <div className="container-loading full-center">
      {/* Imagen principal del personaje mientras carga */}
      <img
        src={Loadingimg}
        alt="Personaje arcade"
        className="img-fluid mb-4 loading-img"
      />

      {/* Gif animado para dar sensacion de actividad */}
      <img
        src={Loadinggif}
        alt="Corazones animados"
        className="img-fluid hearts-img"
      />
    </div>
  );
}

export default Loading;
