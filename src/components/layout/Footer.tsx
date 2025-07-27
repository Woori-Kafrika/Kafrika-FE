import React from 'react';
import '../../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>안내</h3>
          <ul>
            <li><a href="/notices">공지사항</a></li>
            <li><a href="/faq">자주 묻는 질문</a></li>
            <li><a href="/safety">구매안전서비스 이용 조회</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>팀</h3>
          <ul>
            <li><a href="/about">회사소개</a></li>
            <li><a href="/blog">블로그</a></li>
            <li><a href="/careers">채용</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>고객센터</h3>
          <div className="contact-info">
            <p>운영시간: 평일 08:00-19:00 (점심시간 12:00~13:00 미운영 / 주말 및 공휴일 휴무)</p>
            <p>전화: 1544-7772</p>
            <p>이메일: support@kafrika.com</p>
            <p><a href="/payment-error">결제오류 지원 바로가기</a></p>
            <p><a href="/chat">1:1 채팅상담</a></p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Copyright © Kafrika Payments. All Rights Reserved</p>
        <p>사업자등록번호: 123-45-67890 | 대표: 홍길동 | 호스팅서비스: AWS</p>
        <p>통신판매업신고: 2024-서울강남-1234 | 주소: 서울특별시 강남구 테헤란로 123</p>
      </div>
    </footer>
  );
};

export default Footer; 