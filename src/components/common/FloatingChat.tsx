import React from 'react';
import '../../styles/FloatingChat.css';

interface FloatingChatProps {
  onClick?: () => void;
  className?: string;
}

const FloatingChat: React.FC<FloatingChatProps> = ({ onClick, className = '' }) => {
  return (
    <div className={`floating-chat ${className}`}>
      <button className="chat-button" onClick={onClick}>
        ⋯
      </button>
    </div>
  );
};

export default FloatingChat; 