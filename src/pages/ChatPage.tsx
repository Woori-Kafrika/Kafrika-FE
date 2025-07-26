import React from "react";
import ChatRoom from "../ui/chat/ChatRoom";

const ChatPage: React.FC = () => {
  return (
    <div style={{ 
      height: "100vh", 
      background: "#f5f6fa",
      display: "flex",
      flexDirection: "column"
    }}>
      <ChatRoom />
    </div>
  );
};

export default ChatPage; 