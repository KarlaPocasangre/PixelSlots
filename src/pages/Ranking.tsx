import "../css/Ranking.css";

const Ranking = () => {
  return (
    <div className="ranking-page">
      <div className="ranking-container d-flex flex-column align-items-center gap-4">
        {/* Tabla de Mejores Puntajes */}
        <div className="w-100 animate__animated anim-hover">
          <table className="table table-dark text-center align-middle mb-0 tabla-sin-borde">
            <thead className="table-light text-dark">
              <tr>
                <th>Rango</th>
                <th>Usuario</th>
                <th>Puntos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="badge bg-warning text-dark">
                    Mejor Puntaje
                  </span>
                </td>
                <td>
                  Camila Pro{" "}
                  <span role="img" aria-label="corona">
                    👑
                  </span>
                </td>
                <td>3000</td>
              </tr>
              <tr>
                <td>
                  <span className="badge bg-primary text-dark">
                    Segundo Mejor
                  </span>
                </td>
                <td>Daro Hel</td>
                <td>2000</td>
              </tr>
              <tr>
                <td>
                  <span className="badge bg-success text-dark">
                    Tercer Mejor
                  </span>
                </td>
                <td>Mario Mi</td>
                <td>1000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tabla Top 10 */}
        <div className="w-100 tabla-sin-bordes">
          <table className="table table-dark table-hover text-center mb-0">
            <thead>
              <tr>
                <th>Top</th>
                <th>Usuario</th>
                <th>Puntos</th>
                <th>Fichas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Camila Pro</td>
                <td>3000</td>
                <td>0</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Daro Hel</td>
                <td>2000</td>
                <td>1</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mario Mi</td>
                <td>1000</td>
                <td>1</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Luisa Code</td>
                <td>850</td>
                <td>2</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Kevin Flash</td>
                <td>780</td>
                <td>3</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Ana Byte</td>
                <td>750</td>
                <td>0</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Javi Bot</td>
                <td>690</td>
                <td>1</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Lola Bits</td>
                <td>630</td>
                <td>2</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Max Pixel</td>
                <td>590</td>
                <td>1</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Valen UX</td>
                <td>550</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
