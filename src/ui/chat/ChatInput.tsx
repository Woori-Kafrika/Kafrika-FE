import React, { useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div style={{
      padding: "20px",
      background: "#fff",
      borderTop: "1px solid #e0e0e0"
    }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 12 }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="메시지를 입력하세요..."
          style={{
            flex: 1,
            padding: "12px 16px",
            borderRadius: 20,
            border: "1px solid #e0e0e0",
            fontSize: 14,
            outline: "none",
            background: "#f8f9fa"
          }}
        />
        <button
          type="submit"
          disabled={!message.trim()}
          style={{
            padding: "12px 20px",
            borderRadius: 20,
            border: "none",
            background: message.trim() ? "#1976d2" : "#ccc",
            color: "#fff",
            fontSize: 14,
            fontWeight: 600,
            cursor: message.trim() ? "pointer" : "not-allowed",
            transition: "background 0.2s"
          }}
        >
          전송
        </button>
      </form>
    </div>
  );
};

export default ChatInput; 