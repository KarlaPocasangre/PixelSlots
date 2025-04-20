interface Props {
  children: React.ReactNode;
}

function AuthLayout({ children }: Props) {
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <main>{children}</main>
    </div>
  );
}

export default AuthLayout;
