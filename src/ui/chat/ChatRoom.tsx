import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessageList from "./ChatMessageList";
import ChatInput from "./ChatInput";

interface Message {
  id: number;
  text: string;
  sender: "user" | "system";
  timestamp: string;
}

const ChatRoom: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "안녕하세요! KAFRIKA TALK에 오신 것을 환영합니다! 🎉",
      sender: "system",
      timestamp: new Date().toLocaleTimeString()
    },
    {
      id: 2,
      text: "채팅을 시작해보세요!",
      sender: "system",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);

  const handleSendMessage = (text: string) => {
    if (text.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: text,
        sender: "user",
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages([...messages, newMessage]);
    }
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "#fff"
    }}>
      <ChatHeader />
      <ChatMessageList messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatRoom; 