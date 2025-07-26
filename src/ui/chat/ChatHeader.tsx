import React from "react";
import kafrikaLogo from '../../assets/kafrika_logo.png';

const ChatHeader: React.FC = () => {
  return (
    <div style={{
      height: 60,
      background: "#1976d2",
      display: "flex",
      alignItems: "center",
      padding: "0 20px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      color: "#fff"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 12
      }}>
        <img 
          src={kafrikaLogo} 
          alt="logo" 
          style={{ 
            width: 32, 
            height: 32, 
            borderRadius: "50%",
            background: "#fff",
            padding: 2
          }} 
        />
        <div>
          <div style={{ 
            fontSize: 18, 
            fontWeight: 700,
            color: "#fff"
          }}>
            KAFRIKA TALK
          </div>
          <div style={{ 
            fontSize: 12, 
            opacity: 0.8,
            color: "#fff"
          }}>
            실시간 채팅
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ fontSize: 14, opacity: 0.9 }}>
          사용자님
        </div>
        <div style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#4caf50"
        }} />
      </div>
    </div>
  );
};

export default ChatHeader; 