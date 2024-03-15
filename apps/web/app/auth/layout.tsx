import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      {children}
    </div>
  );
};

export default AuthLayout;
