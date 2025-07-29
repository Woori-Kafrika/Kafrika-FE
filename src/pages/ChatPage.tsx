import React, { useEffect, useRef, useState } from 'react';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import '../styles/ChatPage.css';
import ChatMessage from '../components/chat/ChatMessage';
import { API_BASE_URL } from '../constants/api';
import { chatService } from '../services/chatService';

interface Message {
  senderId: number;
  userName: string;
  message: string;
  sentAt: string;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const stompClient = useRef<any>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const userId = parseInt(localStorage.getItem('userId') || '1'); // 기본 1

  const connect = () => {
    const socket = new SockJS(`${API_BASE_URL}/ws`);
    stompClient.current = Stomp.over(socket);

    stompClient.current.connect({}, () => {
      console.log('✅ STOMP connected');
      stompClient.current.subscribe('/sub/chat', (message: any) => {
        const msg: Message = JSON.parse(message.body);
        setMessages((prev) => [...prev, msg]);
      });
    });
  };

  const sendMessage = () => {
    if (inputValue.trim() === '' || !stompClient.current) return;

    const body = {
      userId,
      message: inputValue,
    };

    stompClient.current.send('/pub/chat', {}, JSON.stringify(body));
    setInputValue('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    // 1. 초기 채팅 로그 요청
    chatService.getChatLog().then((data) => setMessages(data));

    // 2. WebSocket 연결
    connect();
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-page-container">
      <div className="chat-list-placeholder"></div>

      <div className="chat-room">
        <div className="chat-room-header">
          <h2 className="chat-room-title">챗봇</h2>
        </div>

        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <ChatMessage
              key={idx}
              userName={msg.userName}
              message={msg.message}
              sentAt={msg.sentAt}
              isMine={msg.senderId === userId}
            />
          ))}
          <div ref={chatEndRef} />
        </div>

        <div className="chat-input-wrapper">
          <input
            type="text"
            className="chat-input"
            placeholder="메시지를 입력하세요"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button className="send-button" onClick={sendMessage}>
            전송
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
