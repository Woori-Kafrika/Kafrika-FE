import React from 'react';
import { Link } from 'react-router-dom';
import preparingServiceImage from '../assets/won.png';
import '../styles/RenewalPage.css';

const RenewalPage: React.FC = () => {
  return (
    <div className="renewal-container">
      <div className="renewal-content">
        {/* 이미지 */}
        <div className="renewal-image">
          <img src={preparingServiceImage} alt="서비스 준비중" className="preparing-service-img" />
        </div>

        {/* 제목 */}
        <h1 className="renewal-title">
          홈페이지<br />
          리뉴얼 작업중입니다
        </h1>

        {/* 설명 */}
        <p className="renewal-description">
          홈페이지 리뉴얼 작업으로
        </p>

        {/* 기간 */}
        <div className="renewal-period">
          12/12(금) 오전 09:00 ~ 05/30(월) 오전 06:00까지
        </div>

        {/* 안내 */}
        <p className="renewal-notice">
          홈페이지 서비스 이용이 제한되오니<br />
          많은 양해 부탁드립니다.
        </p>

        {/* 마무리 메시지 */}
        <p className="renewal-message">
          더 나은 서비스를 위해 새로운 모습으로 찾아 뵙겠습니다.<br />
          감사합니다.
        </p>

        {/* 로그인으로 돌아가기 버튼 */}
        <div className="back-to-login">
          <Link to="/login" className="back-button">
            로그인으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RenewalPage; 