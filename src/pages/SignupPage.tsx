import React, { useState } from 'react';
import Logo from '../components/common/Logo';
import SignupForm from '../components/auth/SignupForm';
import Footer from '../components/layout/Footer';
import FloatingChat from '../components/common/FloatingChat';
import '../styles/SignupPage.css';
import { authService } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const SignupPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSignup = async (
    id: string,
    password: string,
    passwordConfirm: string,
    name: string
  ) => {
    setIsLoading(true);
    setErrorMessage('');

    if (password !== passwordConfirm) {
      setErrorMessage('비밀번호가 일치하지 않습니다.');
      setIsLoading(false);
      return;
    }

    try {
      const result = await authService.signup({ name: name, id: id, pw: password });

      if (result.success) {
        alert('회원가입이 완료되었습니다. 대시보드로 이동합니다.');
        navigate('/dashboard');
      } else {
        setErrorMessage(result.message);
      }
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
          <div
            className="error-message"
            style={{
              color: 'red',
              textAlign: 'center',
              marginBottom: '1rem',
              padding: '0.5rem',
              backgroundColor: '#ffebee',
              borderRadius: '4px',
            }}
          >
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
