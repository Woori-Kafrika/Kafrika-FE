import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessageList from './ChatMessageList';
import ChatInput from './ChatInput';

interface Message {
  id: string;
  text: string;
  sender: "user" | "system";
  timestamp: Date;
  senderName?: string;
}

const ChatRoom: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "안녕하세요! KAFRIKA TALK에 오신 것을 환영합니다! 👋",
      sender: "system",
      timestamp: new Date(),
      senderName: "시스템"
    }
  ]);
  
  const [participantCount, setParticipantCount] = useState(1);
  const [isSimulating, setIsSimulating] = useState(false);

  const handleSendMessage = (text: string) => {
    if (text.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: text.trim(),
        sender: "user",
        timestamp: new Date(),
        senderName: "나"
      };
      setMessages(prev => [...prev, newMessage]);
    }
  };

  const simulateLoad = async () => {
    setIsSimulating(true);
    
    // 10,000명씩 인원 추가
    const newCount = participantCount + 10000;
    setParticipantCount(newCount);
    
    // 시뮬레이션 메시지들 생성
    const simulationMessages: Message[] = [];
    const userNames = [
      "김철수", "이영희", "박민수", "정수진", "최동욱", 
      "한지영", "윤성호", "임미영", "강태현", "조은영",
      "홍윤기", "윤지원", "박서연", "김도현", "이수빈",
      "최지우", "정현우", "한소영", "임태호", "강민지",
      "박준호", "김미영", "이성호", "최지은", "정민수",
      "한동욱", "윤수진", "임철수", "강영희", "조민지",
      "송지우", "박현우", "김소영", "이태호", "최민지",
      "정준호", "한미영", "윤성호", "임지은", "강민수",
      "조동욱", "송수진", "박철수", "김영희", "이민지"
    ];
    
    // 10,000개의 메시지 생성 (카프카 부하 테스트용)
    const messageCount = 10000;
    
    // 메시지 템플릿들
    const messageTemplates = [
      "안녕하세요! {user}입니다.",
      "좋은 하루 되세요!",
      "채팅방이 활발하네요!",
      "반갑습니다!",
      "오늘 날씨가 좋네요.",
      "다들 잘 지내시나요?",
      "새로운 인원이 들어왔네요!",
      "환영합니다!",
      "채팅이 재미있어요!",
      "좋은 정보 공유해주세요!",
      "와! 사람이 정말 많네요!",
      "10,000명이 들어왔어요!",
      "대박! 활발한 채팅방이네요!",
      "다들 반갑습니다!",
      "이제 정말 재미있겠어요!",
      "많은 분들이 오셨네요!",
      "환영합니다 여러분!",
      "이제 대화가 더 재미있겠어요!",
      "와! 정말 많은 분들이네요!",
      "좋은 시간 보내요!",
      "카프카 부하 테스트 중입니다!",
      "실시간 메시지 처리 테스트!",
      "대용량 데이터 처리 실험!",
      "스트리밍 처리 성능 테스트!",
      "메시지 큐 부하 실험!",
      "실시간 채팅 부하 테스트!",
      "카프카 토픽 부하 실험!",
      "메시지 브로커 성능 테스트!",
      "실시간 데이터 스트리밍!",
      "대규모 사용자 시뮬레이션!",
      "메시지 처리량 테스트!",
      "카프카 클러스터 부하 실험!",
      "실시간 이벤트 스트리밍!",
      "메시지 파이프라인 테스트!",
      "대용량 실시간 처리!",
      "카프카 프로듀서 테스트!",
      "메시지 컨슈머 부하 실험!",
      "실시간 데이터 파이프라인!",
      "스트리밍 아키텍처 테스트!"
    ];
    
    // 배치로 메시지 생성 (성능 최적화)
    const batchSize = 100;
    const totalBatches = Math.ceil(messageCount / batchSize);
    
    for (let batch = 0; batch < totalBatches; batch++) {
      const batchMessages: Message[] = [];
      const startIndex = batch * batchSize;
      const endIndex = Math.min(startIndex + batchSize, messageCount);
      
      for (let i = startIndex; i < endIndex; i++) {
        const randomUser = userNames[Math.floor(Math.random() * userNames.length)];
        const randomTemplate = messageTemplates[Math.floor(Math.random() * messageTemplates.length)];
        const messageText = randomTemplate.replace('{user}', randomUser);
        
        batchMessages.push({
          id: `sim_${Date.now()}_${i}`,
          text: messageText,
          sender: "system",
          timestamp: new Date(Date.now() + i * 100), // 0.1초씩 간격
          senderName: randomUser
        });
      }
      
      // 배치로 메시지 추가 (더 빠른 처리)
      setMessages(prev => [...prev, ...batchMessages]);
      
      // 배치 간격 (카프카 부하 시뮬레이션)
      await new Promise(resolve => setTimeout(resolve, 50)); // 0.05초 간격
    }
    
    // 시뮬레이션 완료 후 시스템 메시지
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: `sim_complete_${Date.now()}`,
        text: `🎉 ${newCount.toLocaleString()}명이 참여하고 있습니다! (10,000개 메시지 처리 완료)`,
        sender: "system",
        timestamp: new Date(),
        senderName: "시스템"
      }]);
      setIsSimulating(false);
    }, totalBatches * 50 + 500);
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "#87CEEB"
    }}>
      <ChatHeader 
        participantCount={participantCount}
        onSimulateLoad={simulateLoad}
        isSimulating={isSimulating}
      />
      <ChatMessageList messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatRoom; 