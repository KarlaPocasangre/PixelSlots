// Importa hooks de React y los estilos CSS del ranking
import { useEffect, useState } from "react";
import "../css/Ranking.css";

// Interfaz para definir la forma que deben tener los datos del usuario en el ranking
interface UsuarioRanking {
  usuario: string;
  puntaje: number;
  fichas?: number; // Opcional
}

const Ranking = () => {
  // Estado para almacenar la lista de usuarios
  const [usuarios, setUsuarios] = useState<UsuarioRanking[]>([]);

  // Estado para controlar si la informacion esta cargando
  const [loading, setLoading] = useState(true);

  // Estado para mostrar errores si ocurre algun fallo al obtener los datos
  const [error, setError] = useState("");

  // Hook que se ejecuta al cargar el componente
  useEffect(() => {
    fetch("http://localhost:3000/api/ranking")
      .then((res) => {
        // Verifica si la respuesta del servidor fue exitosa
        if (!res.ok) throw new Error("Error al obtener el ranking.");
        return res.json();
      })
      .then((data) => {
        console.log(data); // Para fines de desarrollo (puede eliminarse)
        setUsuarios(data); // Guarda los datos recibidos en el estado
        setLoading(false); // Finaliza el estado de carga
      })
      .catch((err) => {
        setError(err.message); // Guarda el mensaje de error
        setLoading(false);
      });
  }, []);

  // Crea una copia del arreglo y lo ordena de mayor a menor puntaje
  const usuariosOrdenados = [...usuarios].sort((a, b) => b.puntaje - a.puntaje);

  return (
    <div className="ranking-page">
      <div className="ranking-container d-flex flex-column align-items-center animate__animated animate__fadeInUp">
        {loading ? (
          // Muestra mensaje de carga mientras se obtienen los datos
          <p className="text-white mt-4">Cargando ranking...</p>
        ) : error ? (
          // Si ocurre un error, lo muestra al usuario
          <p className="text-danger mt-4">{error}</p>
        ) : (
          // Si los datos se cargan correctamente, muestra la tabla
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
                  {/* Recorre y muestra cada usuario ordenado */}
                  {usuariosOrdenados.map((user, index) => (
                    <tr key={index}>
                      <td>
                        {index === 0 ? (
                          // Muestra una insignia especial al mejor puntaje
                          <span className="badge hover-rubber bg-warning text-dark">
                            Mejor Puntaje
                          </span>
                        ) : (
                          index + 1 // Muestra la posicion en el ranking
                        )}
                      </td>
                      <td>
                        {/* Agrega una corona al usuario en primer lugar */}
                        {index === 0 ? "👑 " : ""}
                        {user.usuario}
                      </td>
                      <td>{user.puntaje}</td>
                      <td>{user.fichas ?? "—"}</td>{" "}
                      {/* Si no hay fichas, muestra guion */}
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
