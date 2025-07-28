import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TrafficExceededPage.css';

const TrafficExceededPage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate(-1); // 이전 페이지로 돌아가기
  };

  return (
    <div className="traffic-exceeded-container">
      <div className="content-wrapper">
        {/* 왼쪽 텍스트 섹션 */}
        <div className="text-section">
          <h1 className="main-title">트래픽이 몰려서 페이지가 차단된 상태입니다.</h1>
          <div className="description">
            <p>현재 많은 사용자가 동시에 접속하여 서버에 과부하가 발생했습니다.</p>
            <p>복구하려면 시간이 걸리므로 잠시 후 다시 시도해 주시기 바랍니다.</p>
            <p>불편을 드려 죄송합니다.</p>
          </div>
          <button className="upgrade-button" onClick={handleGoBack}>
            이전으로 돌아가기
          </button>
        </div>

        {/* 오른쪽 일러스트레이션 섹션 */}
        <div className="illustration-section">
          <div className="ufo-container">
            <div className="ufo">
              <div className="ufo-body"></div>
              <div className="ufo-window">
                <div className="alien">
                  <div className="alien-eye"></div>
                </div>
              </div>
              <div className="ufo-lights">
                <div className="light"></div>
                <div className="light"></div>
                <div className="light"></div>
              </div>
            </div>
          </div>
          
          <div className="traffic-graph">
            <svg width="200" height="100" viewBox="0 0 200 100">
              <polyline 
                points="20,80 40,60 60,40 80,30 100,20 120,15 140,10 160,8 180,5" 
                fill="none" 
                stroke="#4285f4" 
                strokeWidth="3"
              />
            </svg>
          </div>
          
          <div className="gauge">
            <div className="gauge-body">
              <div className="gauge-needle"></div>
              <div className="gauge-markers">
                <div className="marker"></div>
                <div className="marker"></div>
                <div className="marker"></div>
                <div className="marker"></div>
                <div className="marker"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficExceededPage; 