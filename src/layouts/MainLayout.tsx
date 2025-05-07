import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main
        className="flex-grow-1 d-flex"
        style={{ backgroundColor: "#10102a" }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
