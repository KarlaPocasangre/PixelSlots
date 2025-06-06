import { useEffect, useState } from "react";
import "../css/Ranking.css";

interface UsuarioRanking {
  usuario: string;
  puntaje: number;
  fichas?: number;
}

const Ranking = () => {
  const [usuarios, setUsuarios] = useState<UsuarioRanking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://pixelslotsgame.com/api/ranking")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener el ranking.");
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUsuarios(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const usuariosOrdenados = [...usuarios].sort((a, b) => b.puntaje - a.puntaje);

  return (
    <div className="ranking-page">
      <div className="ranking-container d-flex flex-column align-items-center animate__animated animate__fadeInUp">
        {loading ? (
          <p className="text-white mt-4">Cargando ranking...</p>
        ) : error ? (
          <p className="text-danger mt-4">{error}</p>
        ) : (
          <div className="w-100">
            <div className="tabla-morada">
              <table className="table table-hover text-center mb-0 tabla-sin-bordes">
                <thead>
                  <tr>
                    <th>Top</th>
                    <th>Usuario</th>
                    <th>Puntos</th>
                    <th>Fichas</th>
                  </tr>
                </thead>
                <tbody>
                  {usuariosOrdenados.map((user, index) => (
                    <tr key={index}>
                      <td>
                        {index === 0 ? (
                          <span className="badge hover-rubber bg-warning text-dark">
                            Mejor Puntaje
                          </span>
                        ) : (
                          index + 1
                        )}
                      </td>
                      <td>
                        {index === 0 ? "👑 " : ""}
                        {user.usuario}
                      </td>
                      <td>{user.puntaje}</td>
                      <td>{user.fichas ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ranking;
