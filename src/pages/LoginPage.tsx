import React, { useState } from 'react';
import Logo from '../components/common/Logo';
import LoginForm from '../components/auth/LoginForm';
import Footer from '../components/layout/Footer';
import FloatingChat from '../components/common/FloatingChat';
import { authService } from '../services/authService';
import '../styles/LoginPage.css';

const LoginPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (id: string, pw: string) => {
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      const response = await authService.login({ id, pw });
      
      if (response.success) {
        console.log('로그인 성공!');
        // 로그인 성공 후 처리 (예: 홈페이지로 리다이렉트)
        // window.location.href = '/';
        alert('로그인에 성공했습니다!');
      } else {
        setErrorMessage(response.message || '로그인에 실패했습니다.');
      }
    } catch (error) {
      console.error('로그인 실패:', error);
      setErrorMessage('로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChatClick = () => {
    console.log('채팅 버튼 클릭');
    // 채팅 기능 구현
  };

  return (
    <div className="login-container">
      <div className="login-content">
        {/* 로고 */}
        <Logo size="medium" />

        {/* 제목 */}
        <h1 className="login-title">로그인</h1>

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

        {/* 로그인 폼 */}
        <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
      </div>

      {/* 푸터 */}
      <Footer />

      {/* 플로팅 채팅 아이콘 */}
      <FloatingChat onClick={handleChatClick} />
    </div>
  );
};

export default LoginPage; 