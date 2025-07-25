import React from "react";
import RegisterForm from "../ui/login/RegisterForm";

const RegisterPage: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f5f6fa" }}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage; 