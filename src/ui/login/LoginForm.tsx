import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 로그인 처리 로직
    alert(`이메일: ${email}\n비밀번호: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: 320, padding: 32, background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
      <h2 style={{ marginBottom: 24, textAlign: "center" }}>로그인</h2>
      <div style={{ marginBottom: 16 }}>
        <label style={{ display: "block", marginBottom: 4 }}>이메일</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ddd" }}
        />
      </div>
      <div style={{ marginBottom: 24 }}>
        <label style={{ display: "block", marginBottom: 4 }}>비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ddd" }}
        />
      </div>
      <button type="submit" style={{ width: "100%", padding: 10, background: "#1976d2", color: "#fff", border: "none", borderRadius: 4, fontWeight: 600 }}>
        로그인
      </button>
    </form>
  );
};

export default LoginForm; 