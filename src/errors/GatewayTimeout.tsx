import "../css/Errors.css";
import errorimg from "../assets/img/Personaje-blanco.png";

/* Error 504 - servidor no recibió una respuesta a tiempo desde otro servidor */
function GatewayTimeout() {
  return (
    <div className="container-errors d-flex flex-column justify-content-center align-items-center text-center min-vh-100 py-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-6 col-lg-5">
            <img
              src={errorimg}
              alt="Error 404"
              className="img-fluid mb-4 errorimg"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className="display-1  text-danger text-light title-error">
              ERROR 504
            </h1>
            <h2 className="fs-3 text-light">
                Oooops... Tiempo de espera agotado...
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GatewayTimeout;
