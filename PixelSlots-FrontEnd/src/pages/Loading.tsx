import "../css/Loading.css";
import Loadingimg from "../assets/img/Personaje-color.png";
import Loadinggif from "../assets/img/Corazones-speed.gif";

function Loading() {
  return (
    <div className="container-loading full-center">
      <img
        src={Loadingimg}
        alt="Personaje arcade"
        className="img-fluid mb-4 loading-img"
      />
      <img
        src={Loadinggif}
        alt="Corazones animados"
        className="img-fluid hearts-img"
      />
    </div>
  );
}

export default Loading;
