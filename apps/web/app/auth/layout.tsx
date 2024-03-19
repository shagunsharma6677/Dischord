const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-r from-fuchsia-500 to-cyan-500">
      {children}
    </div>
  );
};

export default AuthLayout;
