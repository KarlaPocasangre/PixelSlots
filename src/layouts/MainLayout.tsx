import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Props {
  children: React.ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <div className="d-flex flex-column min-vh-100 ">
      <Navbar />
      <main className="flex-grow-1 d-flex">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
