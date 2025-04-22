interface Props {
  children: React.ReactNode;
}

function AuthLayout({ children }: Props) {
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center bg-dark">
      <main className="w-100 d-flex flex-grow-1">{children}</main>
    </div>
  );
}

export default AuthLayout;
