import "../css/Ranking.css";

const Ranking = () => {
  // Lista de prueba
  const usuarios = [
    { nombre: "Camila Pro", puntos: 3000, fichas: 0 },
    { nombre: "Daro Hel", puntos: 2000, fichas: 1 },
    { nombre: "Mario Mi", puntos: 1000, fichas: 1 },
    { nombre: "Luisa Code", puntos: 850, fichas: 2 },
    { nombre: "Kevin Flash", puntos: 780, fichas: 3 },
    { nombre: "Ana Byte", puntos: 750, fichas: 0 },
    { nombre: "Javi Bot", puntos: 690, fichas: 1 },
    { nombre: "Lola Bits", puntos: 630, fichas: 2 },
    { nombre: "Max Pixel", puntos: 590, fichas: 1 },
    { nombre: "Valen UX", puntos: 550, fichas: 0 },
  ];

  // Ordenar por puntos descendente
  const usuariosOrdenados = [...usuarios].sort((a, b) => b.puntos - a.puntos);

  // Tomar el mejor puntaje
  const mejorPuntaje = usuariosOrdenados[0]?.puntos;

  return (
    <div className="ranking-page">
      <div className="ranking-container d-flex flex-column align-items-center gap-4">
        {/* Tabla Top 10 */}
        <div className="w-100 tabla-sin-bordes tabla-morada">
          <table className="table table-hover text-center mb-0">
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
                      <span className="badge bg-warning text-dark">
                        Mejor Puntaje
                      </span>
                    ) : (
                      index + 1
                    )}
                  </td>
                  <td>
                    {user.puntos === mejorPuntaje ? "👑 " : ""}
                    {user.nombre}
                  </td>
                  <td>{user.puntos}</td>
                  <td>{user.fichas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
