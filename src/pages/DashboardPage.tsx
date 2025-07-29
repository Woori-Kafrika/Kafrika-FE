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
  const [showCategoryDescription, setShowCategoryDescription] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const categories = [
    '전체', '결제', '정산', '계약', '지급대행', 
    '카드사 심사', '서류안내', '상점관리자', '부가세 신고', 
    '국내결제', '해외결제', '기술지원', '통신판매업 바로신청'
  ];

  const categoryDescriptions = {
    '전체': '모든 카테고리의 질문을 확인할 수 있습니다.',
    '결제': '결제 관련 문의사항과 해결방법을 안내합니다.',
    '정산': '정산 일정, 방법, 한도 등 정산 관련 정보를 제공합니다.',
    '계약': '계약 조건, 해지, 환불 등 계약 관련 문의를 처리합니다.',
    '지급대행': '지급대행 서비스 이용 방법과 수수료를 안내합니다.',
    '카드사 심사': '카드사 심사 기간, 기준, 필요서류를 안내합니다.',
    '서류안내': '필요한 서류와 제출 방법을 상세히 안내합니다.',
    '상점관리자': '상점관리자 권한 설정과 이용 방법을 안내합니다.',
    '부가세 신고': '부가세 신고 기간, 방법, 서류를 안내합니다.',
    '국내결제': '국내 결제 수수료, 한도, 이용 방법을 안내합니다.',
    '해외결제': '해외 결제 환율, 수수료, 이용 방법을 안내합니다.',
    '기술지원': '기술적 문제 해결과 연락처를 안내합니다.',
    '통신판매업 바로신청': '통신판매업 신고 절차와 비용을 안내합니다.'
  };

  const faqItems = [
    { 
      category: '계약', 
      question: 'Q. 총 등록비는 얼마인가요? (가입비, 연관리비, 보증보험료)',
      answer: '총 등록비는 가입비 10만원, 연관리비 월 5만원, 보증보험료 50만원으로 구성됩니다. 상세한 안내는 고객센터로 문의해 주세요.'
    },
    { 
      category: '상점관리자', 
      question: 'Q. 상점관리자는 어떻게 이용하나요?',
      answer: '상점관리자는 관리자 페이지에서 권한을 설정할 수 있습니다. 메뉴 > 설정 > 권한관리에서 상점관리자로 지정할 수 있습니다.'
    },
    { 
      category: '정산', 
      question: 'Q. 정산한도란 무엇인가요?',
      answer: '정산한도는 월별 정산 가능한 최대 금액을 의미합니다. 기본 한도는 1억원이며, 필요시 한도 증액 신청이 가능합니다.'
    },
    { 
      category: '부가세 신고', 
      question: 'Q. 부가가치세 신고기간은 언제인가요?',
      answer: '부가세 신고는 매월 25일까지 신고해야 합니다. 신고 기간을 놓치지 않도록 미리 준비하시기 바랍니다.'
    },
    { 
      category: '국내결제', 
      question: 'Q. 결제 수수료는 어떻게 계산되나요?',
      answer: '국내결제 수수료는 거래금액의 2.5%입니다. 카드사별로 차이가 있을 수 있으니 정확한 수수료는 고객센터로 문의하세요.'
    },
    { 
      category: '해외결제', 
      question: 'Q. 해외 결제 시 환율은 어떻게 적용되나요?',
      answer: '해외결제 시 실시간 환율이 적용됩니다. 결제 시점의 환율로 원화로 변환되어 청구됩니다.'
    },
    { 
      category: '지급대행', 
      question: 'Q. 지급대행 서비스 이용 방법은 어떻게 되나요?',
      answer: '지급대행 서비스는 별도 신청이 필요합니다. 신청서 작성 후 서류 제출을 통해 승인받을 수 있습니다.'
    },
    { 
      category: '카드사 심사', 
      question: 'Q. 카드사 심사 기간은 얼마나 걸리나요?',
      answer: '카드사 심사는 보통 3-5일 소요됩니다. 서류가 완비되지 않은 경우 추가 기간이 소요될 수 있습니다.'
    },
    { 
      category: '서류안내', 
      question: 'Q. 필요한 서류는 어떤 것들이 있나요?',
      answer: '필요한 서류는 사업자등록증, 통장사본, 신분증 사본 등입니다. 상세한 서류 목록은 고객센터에서 안내받으실 수 있습니다.'
    },
    { 
      category: '기술지원', 
      question: 'Q. 기술지원은 언제 이용할 수 있나요?',
      answer: '기술지원은 평일 오전 9시부터 오후 6시까지 이용 가능합니다. 긴급한 경우 24시간 고객센터로 문의하세요.'
    },
    { 
      category: '통신판매업', 
      question: 'Q. 통신판매업 신고는 어떻게 하나요?',
      answer: '통신판매업 신고는 관할 구청에서 신청할 수 있습니다. 신청서와 함께 필요한 서류를 제출하시면 됩니다.'
    },
    { 
      category: '결제', 
      question: 'Q. 결제 오류가 발생했을 때는 어떻게 하나요?',
      answer: '결제 오류 발생 시 먼저 카드 잔액과 한도를 확인해 주세요. 문제가 지속되면 고객센터로 연락해 주시기 바랍니다.'
    },
    { 
      category: '정산', 
      question: 'Q. 정산일은 언제인가요?',
      answer: '정산일은 매월 15일입니다. 단, 공휴일인 경우 다음 영업일로 연기됩니다.'
    },
    { 
      category: '계약', 
      question: 'Q. 계약 해지 시 환불은 어떻게 되나요?',
      answer: '계약 해지 시 미사용 금액에 대해 환불이 가능합니다. 환불 신청 후 7-10일 내에 처리됩니다.'
    },
    { 
      category: '부가세 신고', 
      question: 'Q. 부가세 신고 서류는 어디서 받을 수 있나요?',
      answer: '부가세 신고 서류는 관리자 페이지 > 서류관리에서 다운로드할 수 있습니다. 또는 고객센터로 문의하세요.'
    },
    { 
      category: '상점관리자', 
      question: 'Q. 상점관리자 권한 변경은 어떻게 하나요?',
      answer: '상점관리자 권한 변경은 관리자 페이지 > 설정 > 권한관리에서 변경할 수 있습니다. 변경 시 기존 관리자 승인이 필요합니다.'
    },
    { 
      category: '국내결제', 
      question: 'Q. 국내결제 한도는 얼마인가요?',
      answer: '국내결제 기본 한도는 월 1억원입니다. 필요시 한도 증액 신청을 통해 한도를 늘릴 수 있습니다.'
    },
    { 
      category: '해외결제', 
      question: 'Q. 해외결제 수수료는 얼마인가요?',
      answer: '해외결제 수수료는 거래금액의 3.5%입니다. 추가로 환전 수수료가 발생할 수 있습니다.'
    },
    { 
      category: '지급대행', 
      question: 'Q. 지급대행 수수료는 어떻게 계산되나요?',
      answer: '지급대행 수수료는 거래금액의 1.5%입니다. 대량 거래의 경우 별도 협의가 가능합니다.'
    },
    { 
      category: '카드사 심사', 
      question: 'Q. 카드사 심사 기준은 무엇인가요?',
      answer: '카드사 심사는 사업자 신용도, 거래 실적, 서류 완비도 등을 종합적으로 검토합니다.'
    },
    { 
      category: '서류안내', 
      question: 'Q. 서류 제출 방법은 어떻게 되나요?',
      answer: '서류는 온라인으로 업로드하거나 이메일로 제출할 수 있습니다. 원본 서류는 필요시 별도 요청드립니다.'
    },
    { 
      category: '기술지원', 
      question: 'Q. 기술지원 연락처는 어디인가요?',
      answer: '기술지원은 1544-0000으로 연락하실 수 있습니다. 또는 이메일 support@payments.com으로 문의하세요.'
    },
    { 
      category: '통신판매업', 
      question: 'Q. 통신판매업 신고 비용은 얼마인가요?',
      answer: '통신판매업 신고 비용은 관할 구청마다 다르지만, 보통 5만원 내외입니다. 정확한 비용은 해당 구청에 문의하세요.'
    },
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

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setShowCategoryDescription(true);
    setExpandedFaq(null); // 카테고리 변경 시 FAQ 닫기
    
    // 3초 후 설명 숨기기
    setTimeout(() => {
      setShowCategoryDescription(false);
    }, 3000);
  };

  const handleFaqClick = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
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
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* 카테고리 설명 */}
          {showCategoryDescription && (
            <div className="category-description">
              <p>{categoryDescriptions[selectedCategory as keyof typeof categoryDescriptions]}</p>
            </div>
          )}
          
          <div className="faq-list">
            {filteredFaqItems.map((item, index) => (
              <div key={index} className="faq-item" onClick={() => handleFaqClick(index)}>
                <div className="faq-header">
                  <div className="faq-question-section">
                    <div className="faq-icon q-icon">Q</div>
                    <span className="faq-question">{item.question}</span>
                  </div>
                  <span className="faq-toggle">{expandedFaq === index ? '▼' : '▶'}</span>
                </div>
                {expandedFaq === index && (
                  <div className="faq-answer">
                    <div className="faq-answer-section">
                      <div className="faq-icon a-icon">A</div>
                      <div className="faq-answer-content">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                )}
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