import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import "./App.css";
import Routes from "./routes/Routes";

function AppRoutes() {
  return useRoutes(Routes);
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
