import React, { useState } from 'react';
import Logo from '../components/common/Logo';
import SignupForm from '../components/auth/SignupForm';
import Footer from '../components/layout/Footer';
import FloatingChat from '../components/common/FloatingChat';
import '../styles/SignupPage.css';

const SignupPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async (email: string, password: string, passwordConfirm: string, name: string, phone: string, referralCode?: string) => {
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      // 회원가입 API 호출 (백엔드에 맞게 수정 필요)
      console.log('회원가입 시도:', { email, password, passwordConfirm, name, phone, referralCode });
      
      // 임시로 성공 처리
      alert('회원가입이 완료되었습니다.');
      
    } catch (error) {
      console.error('회원가입 실패:', error);
      setErrorMessage('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChatClick = () => {
    console.log('채팅 버튼 클릭');
    // 채팅 기능 구현
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        {/* 로고 */}
        <Logo size="medium" />

        {/* 제목 */}
        <h1 className="signup-title">회원가입</h1>

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

        {/* 회원가입 폼 */}
        <SignupForm onSubmit={handleSignup} isLoading={isLoading} />
      </div>

      {/* 푸터 */}
      <Footer />

      {/* 플로팅 채팅 아이콘 */}
      <FloatingChat onClick={handleChatClick} />
    </div>
  );
};

export default SignupPage; 