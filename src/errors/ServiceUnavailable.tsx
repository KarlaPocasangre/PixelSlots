import "../css/Errors.css";
import errorimg from "../assets/img/Personaje-blanco.png";

function ServiceUnavailable() {
  return (
    <div className="container-errors d-flex flex-column justify-content-center align-items-center text-center min-vh-100 py-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-6 col-lg-5">
            <img
              src={errorimg}
              alt="Error 401"
              className="img-fluid mb-4 errorimg"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className="display-1  text-danger  text-light title-error">
              ERROR 503
            </h1>
            <h2 className="fs-3 text-light">
              Oops! El servidor esta ocupado. Intentalo en unos minutos.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceUnavailable;
