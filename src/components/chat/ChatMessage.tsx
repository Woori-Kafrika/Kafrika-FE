import React from 'react';
import '../../styles/ChatPage.css';

interface Props {
  userName: string;
  message: string;
  sendAt: string;
  isMine: boolean;
}

const ChatMessage: React.FC<Props> = ({ userName, message, sendAt, isMine }) => {
  const time = new Date(sendAt.slice(0, 23)).toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return (
    <div className={`message ${isMine ? 'message-right' : 'message-left'}`}>
      <div className="bubble-line">
        {isMine && <span className="timestamp">{time}</span>}
        <div className="bubble">{message}</div>
        {!isMine && <span className="timestamp">{time}</span>}
      </div>
    </div>
  );
};

export default ChatMessage;
