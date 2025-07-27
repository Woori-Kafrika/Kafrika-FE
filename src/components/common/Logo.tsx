import React from 'react';
import '../../styles/Logo.css';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', className = '' }) => {
  return (
    <div className={`logo ${size} ${className}`}>
      <div className="logo-line"></div>
      <span className="logo-text">payments</span>
    </div>
  );
};

export default Logo; 