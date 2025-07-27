import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useAuthStore } from "../../stores/authStore";
import kafrikaLogo from '../../assets/kafrika_logo.png';

const LoginForm: React.FC = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [autoLogin, setAutoLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const navigate = useNavigate();
  const { login, setError: setAuthError } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // 백엔드 서버가 없을 때를 위한 임시 로그인 처리
      if (!id || !password) {
        setError("아이디와 비밀번호를 입력해주세요.");
        setIsLoading(false);
        return;
      }

      // 임시 로그인 성공 처리 (백엔드 없이)
      const tempUser = {
        id: "1",
        email: id,
        name: id
      };
      const tempToken = "temp_token_" + Date.now();
      
      login(tempUser, tempToken);
      localStorage.setItem('token', tempToken);
      navigate("/chat");
      
      // 실제 API 호출은 주석 처리
      /*
      const response = await api.login({
        email: id,
        password: password
      });

      if (response.success && response.data) {
        // 로그인 성공
        login(response.data.user, response.data.token);
        localStorage.setItem('token', response.data.token);
        navigate("/chat");
      } else {
        // 로그인 실패
        setError(response.error || "로그인에 실패했습니다.");
      }
      */
    } catch (err) {
      setError("로그인 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
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
      {/* 로그인 카드 */}
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          borderRadius: 18,
          padding: "56px 48px 36px 48px",
          minWidth: 420,
          maxWidth: 520,
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
          아이디와 비밀번호를<br />입력해주세요.
        </h2>
        
        {error && (
          <div style={{ 
            color: "#d32f2f", 
            background: "#ffebee", 
            padding: "12px", 
            borderRadius: 8, 
            marginBottom: 20,
            fontSize: 14
          }}>
            {error}
          </div>
        )}
        
        <div style={{ marginBottom: 22 }}>
          <label style={{ display: "block", color: "#1976d2", marginBottom: 7, fontWeight: 600, fontSize: 16 }}>아이디</label>
          <input
            type="text"
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder="아이디를 입력하세요"
            disabled={isLoading}
            style={{
              width: "100%",
              padding: "16px 14px",
              borderRadius: 9,
              border: "1.5px solid #e0e0e0",
              fontSize: 18,
              outline: "none",
              background: isLoading ? "#f5f5f5" : "#f6faff",
              transition: "border 0.2s, box-shadow 0.2s",
              fontWeight: 500,
              boxSizing: "border-box",
              boxShadow: "0 1px 2px rgba(25, 118, 210, 0.03)"
            }}
            required
            onFocus={e => {
              if (!isLoading) {
                e.currentTarget.style.border = '#1976d2';
                e.currentTarget.style.boxShadow = '0 0 0 2px #b2e0ff';
              }
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
            disabled={isLoading}
            style={{
              width: "100%",
              padding: "16px 14px",
              borderRadius: 9,
              border: "1.5px solid #e0e0e0",
              fontSize: 18,
              outline: "none",
              background: isLoading ? "#f5f5f5" : "#f6faff",
              transition: "border 0.2s, box-shadow 0.2s",
              fontWeight: 500,
              boxSizing: "border-box",
              boxShadow: "0 1px 2px rgba(25, 118, 210, 0.03)"
            }}
            required
            onFocus={e => {
              if (!isLoading) {
                e.currentTarget.style.border = '#1976d2';
                e.currentTarget.style.boxShadow = '0 0 0 2px #b2e0ff';
              }
            }}
            onBlur={e => {
              e.currentTarget.style.border = '#e0e0e0';
              e.currentTarget.style.boxShadow = '0 1px 2px rgba(25, 118, 210, 0.03)';
            }}
          />
        </div>
        <button 
          type="submit" 
          disabled={isLoading}
          style={{
            width: "100%",
            padding: 18,
            background: isLoading ? "#ccc" : "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: 9,
            fontWeight: 700,
            fontSize: 20,
            marginTop: 20,
            marginBottom: 40,
            cursor: isLoading ? "not-allowed" : "pointer",
            boxShadow: "0 2px 8px rgba(25, 118, 210, 0.08)",
            transition: "background 0.2s, box-shadow 0.2s"
          }}
          onMouseOver={e => {
            if (!isLoading) {
              e.currentTarget.style.background = "#1251a3";
            }
          }}
          onMouseOut={e => {
            if (!isLoading) {
              e.currentTarget.style.background = "#1976d2";
            }
          }}
        >
          {isLoading ? "로그인 중..." : "로그인 하기"}
        </button>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 0, justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              id="auto-login"
              type="checkbox"
              checked={autoLogin}
              onChange={e => setAutoLogin(e.target.checked)}
              disabled={isLoading}
              style={{ marginRight: 8, accentColor: "#1976d2", width: 16, height: 16 }}
            />
            <label htmlFor="auto-login" style={{ color: "#1976d2", fontWeight: 500, fontSize: 15, cursor: "pointer" }}>
              자동 로그인
            </label>
          </div>
          <a href="/register" style={{ textDecoration: "none", color: "#1976d2", fontWeight: 500, fontSize: 15, marginLeft: 16 }}>
            회원가입
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm; 