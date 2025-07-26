import React from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "system";
  timestamp: string;
}

interface ChatMessageListProps {
  messages: Message[];
}

const ChatMessageList: React.FC<ChatMessageListProps> = ({ messages }) => {
  return (
    <div style={{
      flex: 1,
      padding: "20px",
      overflowY: "auto",
      background: "#f8f9fa"
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
            <div style={{ fontSize: 14, lineHeight: 1.4 }}>
              {message.text}
            </div>
            <div style={{
              fontSize: 11,
              opacity: 0.7,
              marginTop: 4,
              textAlign: message.sender === "user" ? "right" : "left"
            }}>
              {message.timestamp}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessageList; 