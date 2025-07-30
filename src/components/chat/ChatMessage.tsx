import React from 'react';
import '../../styles/ChatPage.css';

interface ChatMessageProps {
  userName: string;
  message: string;
  sentAt: string;
  isMine: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ userName, message, sentAt, isMine }) => {
  return (
    <div className={`message ${isMine ? 'message-right' : 'message-left'}`}>
      {!isMine && <div className="sender">{userName}</div>}
      <div className="bubble">{message}</div>
      <div className="timestamp">{sentAt}</div>
    </div>
  );
};

export default ChatMessage;
