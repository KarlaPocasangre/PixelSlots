import { useEffect, useState } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import "./App.css";
import Routes from "./routes/Routes";
import Loading from "./pages/Loading";

function AppRoutes() {
  return useRoutes(Routes);
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
