import React from 'react';
import wonImage from '../../assets/won.png';
import '../../styles/Logo.css';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', className = '' }) => {
  return (
    <div className={`logo ${size} ${className}`}>
      <div className="logo-content">
        <img src={wonImage} alt="won" className="won-icon" />
        <span className="logo-text">payments</span>
      </div>
    </div>
  );
};

export default Logo; 