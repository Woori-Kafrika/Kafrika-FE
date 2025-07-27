import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>안내</h3>
          <ul>
            <li><Link to="/renewal">공지사항</Link></li>
            <li><Link to="/renewal">자주 묻는 질문</Link></li>
            <li><Link to="/renewal">구매안전서비스 이용 조회</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>팀</h3>
          <ul>
            <li><Link to="/renewal">회사소개</Link></li>
            <li><Link to="/renewal">블로그</Link></li>
            <li><Link to="/renewal">채용</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>고객센터</h3>
          <div className="contact-info">
            <p>운영시간: 평일 09:00-21:00 (점심시간 13:00~14:00 미운영 / 주말 및 공휴일 휴무)</p>
            <p>전화: 1544-7772</p>
            <p>이메일: support@kafrika.com</p>
            <p><Link to="/renewal">결제오류 지원 바로가기</Link></p>
            <p><Link to="/renewal">1:1 채팅상담</Link></p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Copyright © Woori Payments. All Rights Reserved</p>
        <p>사업자등록번호: 123-45-67890 | 대표: KAFRIKA | 호스팅서비스: JCLOUD</p>
        <p>통신판매업신고: 2025-KAFRIKA-1234 | 주소: 서울특별시 월드컵북로 434 상암 IT Tower</p>
      </div>
    </footer>
  );
};

export default Footer; 