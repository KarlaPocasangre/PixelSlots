import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center bg-dark">
      <main className="w-100 d-flex flex-grow-1">
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;
