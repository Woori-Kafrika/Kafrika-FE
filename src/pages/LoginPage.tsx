import React from "react";
import LoginForm from "../ui/login/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f5f6fa" }}>
      <LoginForm />
    </div>
  );
};

export default LoginPage; 