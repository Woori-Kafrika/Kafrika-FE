import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import kafrikaLogo from '../../assets/kafrika_logo.png';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [autoLogin, setAutoLogin] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
    setError("");
    // TODO: 회원가입 처리
    alert(`이메일: ${email}\n비밀번호: ${password}\n자동 로그인: ${autoLogin}`);
    // 회원가입 성공 시 채팅 페이지로 이동
    navigate("/chat");
  };

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      background: "linear-gradient(135deg, #90d8fc 0%, #b2e0ff 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
    }}>
      {/* 상단 로고 및 서비스명 */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{
          width: 170,
          height: 170,
          margin: "0 auto 10px auto",
          background: "#fff",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
          border: "3px solid #ffb62a"
        }}>
          <img src={kafrikaLogo} alt="logo" style={{ width: 120, height: 120, objectFit: "contain" }} />
        </div>
        <div style={{
          fontSize: 60,
          fontWeight: 900,
          color: "#ffb62a",
          letterSpacing: 2,
          textShadow: "2px 3px 0 #1976d2, 0 2px 8px #fff"
        }}>
          KAFRIKA TALK
        </div>
      </div>
      {/* 회원가입 카드 */}
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          borderRadius: 18,
          padding: "56px 64px 48px 64px",
          minWidth: 480,
          maxWidth: 600,
          width: "95vw",
          boxShadow: "0 6px 32px rgba(0,0,0,0.11)",
          marginBottom: 24,
          display: "flex",
          flexDirection: "column",
          gap: 0,
          boxSizing: "border-box"
        }}
      >
        <h2 style={{ fontSize: 30, fontWeight: 700, marginBottom: 50, lineHeight: 1.3, color: "#222" }}>
          회원가입<br />정보를 입력해주세요.
        </h2>
        <div style={{ marginBottom: 22 }}>
          <label style={{ display: "block", color: "#1976d2", marginBottom: 7, fontWeight: 600, fontSize: 16 }}>이메일</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
            style={{
              width: "100%",
              padding: "16px 14px",
              borderRadius: 9,
              border: "1.5px solid #e0e0e0",
              fontSize: 18,
              outline: "none",
              background: "#f6faff",
              transition: "border 0.2s, box-shadow 0.2s",
              fontWeight: 500,
              boxSizing: "border-box",
              boxShadow: "0 1px 2px rgba(25, 118, 210, 0.03)"
            }}
            required
            onFocus={e => {
              e.currentTarget.style.border = '#1976d2';
              e.currentTarget.style.boxShadow = '0 0 0 2px #b2e0ff';
            }}
            onBlur={e => {
              e.currentTarget.style.border = '#e0e0e0';
              e.currentTarget.style.boxShadow = '0 1px 2px rgba(25, 118, 210, 0.03)';
            }}
          />
        </div>
        <div style={{ marginBottom: 22 }}>
          <label style={{ display: "block", color: "#1976d2", marginBottom: 10, fontWeight: 600, fontSize: 16 }}>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
            style={{
              width: "100%",
              padding: "16px 14px",
              borderRadius: 9,
              border: "1.5px solid #e0e0e0",
              fontSize: 18,
              outline: "none",
              background: "#f6faff",
              transition: "border 0.2s, box-shadow 0.2s",
              fontWeight: 500,
              boxSizing: "border-box",
              boxShadow: "0 1px 2px rgba(25, 118, 210, 0.03)"
            }}
            required
            onFocus={e => {
              e.currentTarget.style.border = '#1976d2';
              e.currentTarget.style.boxShadow = '0 0 0 2px #b2e0ff';
            }}
            onBlur={e => {
              e.currentTarget.style.border = '#e0e0e0';
              e.currentTarget.style.boxShadow = '0 1px 2px rgba(25, 118, 210, 0.03)';
            }}
          />
        </div>
        <div style={{ marginBottom: 22 }}>
          <label style={{ display: "block", color: "#1976d2", marginBottom: 10, fontWeight: 600, fontSize: 16 }}>비밀번호 확인</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder="비밀번호를 다시 입력하세요"
            style={{
              width: "100%",
              padding: "16px 14px",
              borderRadius: 9,
              border: "1.5px solid #e0e0e0",
              fontSize: 18,
              outline: "none",
              background: "#f6faff",
              transition: "border 0.2s, box-shadow 0.2s",
              fontWeight: 500,
              boxSizing: "border-box",
              boxShadow: "0 1px 2px rgba(25, 118, 210, 0.03)"
            }}
            required
            onFocus={e => {
              e.currentTarget.style.border = '#1976d2';
              e.currentTarget.style.boxShadow = '0 0 0 2px #b2e0ff';
            }}
            onBlur={e => {
              e.currentTarget.style.border = '#e0e0e0';
              e.currentTarget.style.boxShadow = '0 1px 2px rgba(25, 118, 210, 0.03)';
            }}
          />
        </div>
        {error && <div style={{ color: "red", marginBottom: 16 }}>{error}</div>}
        <button type="submit" style={{
          width: "100%",
          padding: 18,
          background: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: 9,
          fontWeight: 700,
          fontSize: 20,
          marginTop: 20,
          marginBottom: 40,
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(25, 118, 210, 0.08)",
          transition: "background 0.2s, box-shadow 0.2s"
        }}
        onMouseOver={e => (e.currentTarget.style.background = "#1251a3")}
        onMouseOut={e => (e.currentTarget.style.background = "#1976d2")}
        >
          회원가입 하기
        </button>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 0, justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              id="auto-login"
              type="checkbox"
              checked={autoLogin}
              onChange={e => setAutoLogin(e.target.checked)}
              style={{ marginRight: 8, accentColor: "#1976d2", width: 16, height: 16 }}
            />
            <label htmlFor="auto-login" style={{ color: "#1976d2", fontWeight: 500, fontSize: 15, cursor: "pointer" }}>
              자동 로그인
            </label>
          </div>
          <Link to="/" style={{ textDecoration: "none", color: "#1976d2", fontWeight: 500, fontSize: 15, marginLeft: 16 }}>
            로그인
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm; 