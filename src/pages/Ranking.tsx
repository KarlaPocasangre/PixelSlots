import "../css/Ranking.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Ranking() {
  return (
    <div className="contenedor-principal-ranking">
      <div className="container">
        <table className="table table-dark table-striped table-bordered text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Usuario</th>
              <th>Puntaje</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Juan Pérez</td>
              <td>1500</td>
              <td>06/05/2025</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ana Gómez</td>
              <td>1450</td>
              <td>06/05/2025</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Carlos Ruiz</td>
              <td>1380</td>
              <td>06/05/2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Ranking;
