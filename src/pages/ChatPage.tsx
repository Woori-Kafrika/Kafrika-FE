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

interface ChatStatus {
  waitingCount: number;
  estimatedDelaySec: number;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatStatus, setChatStatus] = useState<ChatStatus | null>(null);
  const [inputValue, setInputValue] = useState('');
  const stompClient = useRef<any>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const userId = parseInt(localStorage.getItem('userId') || '1'); // 기본 1

  const connect = () => {
    const socket = new SockJS(`${API_BASE_URL}/ws`);
    stompClient.current = Stomp.over(socket);

    stompClient.current.connect({}, () => {
      console.log('✅ STOMP connected');
      stompClient.current.subscribe('/topic/chat', (message: any) => {
        const msg: Message = JSON.parse(message.body);

        // 관리자면 다 받고, 아니면 자기 메시지나 admin 메시지만 보기
        if (userId === 1 || msg.senderId === 1 || msg.senderId === userId) {
          setMessages((prev) => [...prev, msg]);
        }
      });

      stompClient.current.subscribe('/topic/chat/status', (message: any) => {
        const status: ChatStatus = JSON.parse(message.body);
        setChatStatus(status);
      });
    });
  };

  const sendMessage = () => {
    if (inputValue.trim() === '' || !stompClient.current) return;

    const now = new Date();
    const newMessage: Message = {
      senderId: userId,
      userName: userId === 1 ? '관리자' : `User ${userId}`, // 필요시 수정
      message: inputValue,
      sentAt: now.toISOString(),
    };

    // 프론트에서 바로 추가 (UI에 즉시 반영)
    setMessages((prev) => [...prev, newMessage]);

    const body = {
      userId,
      message: inputValue,
    };

    // stompClient.current.send('/pub/chat', {}, JSON.stringify(body));
    stompClient.current.send('/pub/kafka-chat', {}, JSON.stringify(body));
    setInputValue('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    chatService.getChatLog().then((data) => {
      if (userId === 1) {
        // 관리자면 전체 메시지 보기
        setMessages(data);
      } else {
        // 일반 유저면 관리자/자신의 메시지만 보기
        const filtered = data.filter((msg) => msg.senderId === 1 || msg.senderId === userId);
        setMessages(filtered);
      }
    });

    connect();
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-page-container">
      <div className="chat-room-header">
        <h2 className="chat-room-title">챗봇</h2>
        {chatStatus && (
          <div className="chat-status-bar">
            ⏳ 현재 대기자 <strong>{chatStatus.waitingCount}</strong>명, 예상 지연{' '}
            <strong>{chatStatus.estimatedDelaySec}</strong>초
          </div>
        )}
      </div>

      <div className="chat-room">
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
