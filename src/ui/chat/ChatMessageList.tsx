import React from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "system";
  timestamp: Date;
  senderName?: string; // 발신자 이름 추가
}

interface ChatMessageListProps {
  messages: Message[];
}

const ChatMessageList: React.FC<ChatMessageListProps> = ({ messages }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ko-KR', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <div style={{
      flex: 1,
      padding: "20px",
      overflowY: "auto",
      background: "#87CEEB"
    }}>
      {messages.map((message) => (
        <div
          key={message.id}
          style={{
            marginBottom: 16,
            display: "flex",
            justifyContent: message.sender === "user" ? "flex-end" : "flex-start"
          }}
        >
          <div style={{
            maxWidth: "70%",
            padding: "12px 16px",
            borderRadius: message.sender === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
            background: message.sender === "user" ? "#1976d2" : "#fff",
            color: message.sender === "user" ? "#fff" : "#333",
            boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
            position: "relative"
          }}>
            {/* 발신자 이름 표시 */}
            {message.senderName && (
              <div style={{
                fontSize: 12,
                fontWeight: 600,
                marginBottom: 4,
                opacity: 0.8,
                color: message.sender === "user" ? "#fff" : "#1976d2"
              }}>
                {message.senderName}
              </div>
            )}
            <div style={{ fontSize: 14, lineHeight: 1.4 }}>
              {message.text}
            </div>
            <div style={{
              fontSize: 11,
              opacity: 0.7,
              marginTop: 4,
              textAlign: message.sender === "user" ? "right" : "left"
            }}>
              {formatTime(message.timestamp)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessageList; 