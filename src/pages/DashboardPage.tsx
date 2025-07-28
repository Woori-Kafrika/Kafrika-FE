import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import FloatingChat from '../components/common/FloatingChat';
import ServiceDelayModal from '../components/common/ServiceDelayModal';
import '../styles/DashboardPage.css';
import wonImage from '../assets/won.png';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [showServiceDelayModal, setShowServiceDelayModal] = useState(false);

  const categories = [
    '전체', '결제', '정산', '계약', '지급대행', 
    '카드사 심사', '서류안내', '상점관리자', '부가세 신고', 
    '국내결제', '해외결제', '기술지원', '통신판매업 바로신청'
  ];

  const faqItems = [
    { category: '계약', question: 'Q. 총 등록비는 얼마인가요? (가입비, 연관리비, 보증보험료)' },
    { category: '상점관리자', question: 'Q. 상점관리자는 어떻게 이용하나요?' },
    { category: '정산', question: 'Q. 정산한도란 무엇인가요?' },
    { category: '부가세 신고', question: 'Q. 부가가치세 신고기간은 언제인가요?' },
    { category: '국내결제', question: 'Q. 결제 수수료는 어떻게 계산되나요?' },
    { category: '해외결제', question: 'Q. 해외 결제 시 환율은 어떻게 적용되나요?' },
    { category: '지급대행', question: 'Q. 지급대행 서비스 이용 방법은 어떻게 되나요?' },
    { category: '카드사 심사', question: 'Q. 카드사 심사 기간은 얼마나 걸리나요?' },
    { category: '서류안내', question: 'Q. 필요한 서류는 어떤 것들이 있나요?' },
    { category: '기술지원', question: 'Q. 기술지원은 언제 이용할 수 있나요?' },
    { category: '통신판매업', question: 'Q. 통신판매업 신고는 어떻게 하나요?' },
    { category: '결제', question: 'Q. 결제 오류가 발생했을 때는 어떻게 하나요?' },
    { category: '정산', question: 'Q. 정산일은 언제인가요?' },
    { category: '계약', question: 'Q. 계약 해지 시 환불은 어떻게 되나요?' },
    { category: '부가세 신고', question: 'Q. 부가세 신고 서류는 어디서 받을 수 있나요?' },
    { category: '상점관리자', question: 'Q. 상점관리자 권한 변경은 어떻게 하나요?' },
    { category: '국내결제', question: 'Q. 국내결제 한도는 얼마인가요?' },
    { category: '해외결제', question: 'Q. 해외결제 수수료는 얼마인가요?' },
    { category: '지급대행', question: 'Q. 지급대행 수수료는 어떻게 계산되나요?' },
    { category: '카드사 심사', question: 'Q. 카드사 심사 기준은 무엇인가요?' },
    { category: '서류안내', question: 'Q. 서류 제출 방법은 어떻게 되나요?' },
    { category: '기술지원', question: 'Q. 기술지원 연락처는 어디인가요?' },
    { category: '통신판매업', question: 'Q. 통신판매업 신고 비용은 얼마인가요?' },
  ];

  const handleChatClick = () => {
    navigate('/traffic-exceeded');
  };

  const handlePaymentHistory = () => {
    navigate('/traffic-exceeded');
  };

  const handleChatConsultation = () => {
    navigate('/traffic-exceeded');
  };

  const filteredFaqItems = selectedCategory === '전체' 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory);

  // 로그인 후 1초 뒤에 모달 표시
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowServiceDelayModal(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="dashboard-container">
      {/* 상단 네비게이션 */}
      <nav className="top-navigation">
        <div className="nav-left">
          <div className="logo">
            <img src={wonImage} alt="WON" className="nav-logo" />
            <span>payments</span>
          </div>
          <div className="nav-links">
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/traffic-exceeded'); }}>사업 시작</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/traffic-exceeded'); }}>결제 서비스</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/traffic-exceeded'); }}>이용요금</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/traffic-exceeded'); }} className="active">고객센터</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/traffic-exceeded'); }}>개발가이드</a>
            </div>
          </div>
          <div className="nav-right">
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/traffic-exceeded'); }}>결제내역 조회</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/traffic-exceeded'); }}>로그인</a>
            <button className="apply-button" onClick={() => navigate('/traffic-exceeded')}>이용 신청하기</button>
          </div>
      </nav>

      {/* 메인 고객센터 섹션 */}
      <div className="main-content">
        <div className="customer-service-header">
          <div className="customer-service-box">
            <h1 className="service-title">고객센터</h1>
            <h2 className="service-subtitle">무엇을 도와드릴까요?</h2>
            {/* 빠른 액세스 카드 */}
                          <div className="quick-access-cards">
                <div className="access-card payment-card" onClick={handlePaymentHistory}>
                  <div className="card-icon payment">💰</div>
                  <span>결제내역 확인 &gt;</span>
                </div>
                <div className="access-card chat-card" onClick={handleChatConsultation}>
                  <div className="card-icon chat">💬</div>
                  <span>1:1 채팅상담 &gt;</span>
                </div>
              </div>
          </div>
          {/* 오른쪽 공지사항 */}
          <div className="dashboard-side-box">
            <div className="dashboard-notice">
              <div className="notice-title">공지사항</div>
              <ul className="notice-list">
                <li>5월 1일(수) 근로자의 날 고객센터 휴무 안내</li>
                <li>시스템 점검 안내 (4/30 23:00~24:00)</li>
                <li>신규 서비스 오픈 안내</li>
                <li>결제 시스템 업데이트 안내</li>
                <li>고객센터 운영시간 변경 안내</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ 섹션 */}
        <div className="faq-section">
          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="faq-list">
            {filteredFaqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <span className="faq-category">{item.category}</span>
                <span className="faq-question">{item.question}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 하단 도움말 섹션 */}
        <div className="help-section">
          <div className="help-content">
            <h3 className="help-title">아직 궁금한 점이 있으신가요?</h3>
            <p className="help-description">
              더 자세한 도움이 필요하시면 언제든 연락해주세요.
            </p>
            <div className="help-buttons">
              <button className="help-button-primary" onClick={() => navigate('/traffic-exceeded')}>1:1 문의하기</button>
              <button className="help-button-secondary" onClick={() => navigate('/traffic-exceeded')}>전화상담</button>
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <Footer />

        {/* 플로팅 채팅 아이콘 */}
        <FloatingChat onClick={handleChatClick} />

        {/* 서비스 지연 안내 모달 */}
        <ServiceDelayModal 
          isOpen={showServiceDelayModal} 
          onClose={() => setShowServiceDelayModal(false)} 
        />
      </div>
    </div>
  );
};

export default DashboardPage;