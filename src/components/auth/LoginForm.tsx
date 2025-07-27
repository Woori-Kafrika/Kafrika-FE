import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/LoginForm.css';

interface LoginFormProps {
  onSubmit: (id: string, pw: string) => void;
  isLoading?: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, isLoading = false }) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [idError, setIdError] = useState('');
  const [pwError, setPwError] = useState('');

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setId(value);
    if (value === '') {
      setIdError('아이디를 입력해주세요.');
    } else {
      setIdError('');
    }
  };

  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPw(value);
    if (value === '') {
      setPwError('비밀번호를 입력해주세요.');
    } else {
      setPwError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    if (!id) {
      setIdError('아이디를 입력해주세요.');
      hasError = true;
    }
    if (!pw) {
      setPwError('비밀번호를 입력해주세요.');
      hasError = true;
    }

    if (!hasError) {
      onSubmit(id, pw);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="input-group">
        <label className="input-label">아이디</label>
        <input
          type="text"
          value={id}
          onChange={handleIdChange}
          className={`input-field ${idError ? 'error' : ''}`}
          placeholder="아이디를 입력해주세요"
          disabled={isLoading}
        />
        {idError && <div className="error-message">{idError}</div>}
      </div>

      <div className="input-group">
        <label className="input-label">비밀번호</label>
        <input
          type="password"
          value={pw}
          onChange={handlePwChange}
          className={`input-field ${pwError ? 'error' : ''}`}
          placeholder="비밀번호를 입력해주세요"
          disabled={isLoading}
        />
        {pwError && <div className="error-message">{pwError}</div>}
      </div>

      <div className="form-actions">
        <div className="links">
          <Link to="/signup" className="link">회원가입</Link>
          <span className="separator">|</span>
          <Link to="/find-password" className="link">비밀번호 찾기</Link>
        </div>
        <button 
          type="submit" 
          className="login-button"
          disabled={isLoading}
        >
          {isLoading ? '로그인 중...' : '로그인'}
        </button>
      </div>
    </form>
  );
};

export default LoginForm; 