// Importa hooks y componentes necesarios
import { useEffect, useState } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import "./App.css";

// Importa las rutas configuradas y la pantalla de carga
import Routes from "./routes/Routes";
import Loading from "./pages/Loading";

// Componente que carga las rutas usando useRoutes
function AppRoutes() {
  return useRoutes(Routes);
}

function App() {
  // Estado para mostrar pantalla de carga inicial
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Muestra la pantalla de carga durante 1.8 segundos
    const timer = setTimeout(() => setLoading(false), 1800);

    // Limpia el temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  // Mientras esta en estado de carga, muestra el componente Loading
  if (loading) {
    return <Loading />;
  }

  // Una vez termina la carga, renderiza la aplicacion con las rutas
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
