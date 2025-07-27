import React from 'react';
import kafrikaLogo from '../../assets/kafrika_logo.png';

interface ChatHeaderProps {
  participantCount: number;
  onSimulateLoad: () => void;
  isSimulating: boolean;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ participantCount, onSimulateLoad, isSimulating }) => {
  return (
    <div style={{
      background: "#fff",
      borderBottom: "1px solid #e0e0e0",
      padding: "16px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img src={kafrikaLogo} alt="logo" style={{ width: 32, height: 32 }} />
        <div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#1976d2" }}>
            KAFRIKA TALK
          </div>
          <div style={{ fontSize: 14, color: "#666", marginTop: 2 }}>
            현재 {participantCount}명 참여 중
          </div>
        </div>
      </div>
      
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button
          onClick={onSimulateLoad}
          disabled={isSimulating}
          style={{
            padding: "8px 16px",
            background: isSimulating ? "#ccc" : "#ff6b35",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontSize: 14,
            fontWeight: 600,
            cursor: isSimulating ? "not-allowed" : "pointer",
            transition: "background 0.2s",
            display: "flex",
            alignItems: "center",
            gap: 6
          }}
          onMouseOver={e => {
            if (!isSimulating) {
              e.currentTarget.style.background = "#e55a2b";
            }
          }}
          onMouseOut={e => {
            if (!isSimulating) {
              e.currentTarget.style.background = "#ff6b35";
            }
          }}
        >
          {isSimulating ? (
            <>
              <div style={{ width: 12, height: 12, border: "2px solid #fff", borderTop: "2px solid transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }}></div>
              시뮬레이션 중...
            </>
          ) : (
            <>
              <span style={{ fontSize: 16 }}>👥</span>
              인원 추가 (+10,000명)
            </>
          )}
        </button>
      </div>
      
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default ChatHeader; 