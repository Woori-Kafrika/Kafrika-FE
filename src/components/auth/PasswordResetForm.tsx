import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/PasswordResetForm.css';

interface PasswordResetFormProps {
  onSubmit: (email: string) => void;
  isLoading?: boolean;
}

const PasswordResetForm: React.FC<PasswordResetFormProps> = ({ onSubmit, isLoading = false }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value === '') {
      setEmailError('이메일을 입력해주세요.');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    if (!email) {
      setEmailError('이메일을 입력해주세요.');
      hasError = true;
    }

    if (!hasError) {
      onSubmit(email);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="password-reset-form">
      <div className="input-group">
        <p className="input-description">임시 비밀번호를 받을 이메일 계정을 입력해주세요.</p>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className={`input-field ${emailError ? 'error' : ''}`}
          placeholder="이메일을 입력해주세요"
          disabled={isLoading}
        />
        {emailError && <div className="error-message">{emailError}</div>}
      </div>

      <div className="form-actions">
        <div className="links">
          <Link to="/login" className="link">로그인으로 돌아가기</Link>
        </div>
        <button 
          type="submit" 
          className="reset-button"
          disabled={isLoading || !email}
        >
          {isLoading ? '처리 중...' : '다음'}
        </button>
      </div>
    </form>
  );
};

export default PasswordResetForm; 