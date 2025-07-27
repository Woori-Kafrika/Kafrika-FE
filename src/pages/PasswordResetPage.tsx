import React, { useState } from 'react';
import PasswordResetForm from '../components/auth/PasswordResetForm';
import Footer from '../components/layout/Footer';
import FloatingChat from '../components/common/FloatingChat';
import '../styles/PasswordResetPage.css';

const PasswordResetPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordReset = async (email: string) => {
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      // 비밀번호 재설정 API 호출 (백엔드에 맞게 수정 필요)
      console.log('비밀번호 재설정 시도:', { email });
      
      // 임시로 성공 처리
      alert('임시 비밀번호가 이메일로 전송되었습니다.');
      
    } catch (error) {
      console.error('비밀번호 재설정 실패:', error);
      setErrorMessage('비밀번호 재설정 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChatClick = () => {
    console.log('채팅 버튼 클릭');
    // 채팅 기능 구현
  };

  return (
    <div className="password-reset-container">
      <div className="password-reset-content">
        {/* 보안 아이콘 */}
        <div className="security-icon">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="safety-lock-video"
          >
            <source src={process.env.PUBLIC_URL + '/assets/safety_lock.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* 설명 텍스트 */}
        <h2 className="password-reset-description">
          우리 페이먼츠 계정의<br />
          비밀번호를 재설정합니다.
        </h2>

        {/* 에러 메시지 */}
        {errorMessage && (
          <div className="error-message" style={{ 
            color: 'red', 
            textAlign: 'center', 
            marginBottom: '1rem',
            padding: '0.5rem',
            backgroundColor: '#ffebee',
            borderRadius: '4px'
          }}>
            {errorMessage}
          </div>
        )}

        {/* 비밀번호 재설정 폼 */}
        <PasswordResetForm onSubmit={handlePasswordReset} isLoading={isLoading} />
      </div>

      {/* 푸터 */}
      <Footer />

      {/* 플로팅 채팅 아이콘 */}
      <FloatingChat onClick={handleChatClick} />
    </div>
  );
};

export default PasswordResetPage; 