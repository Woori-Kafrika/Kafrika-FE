import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';
import creditIcon from '../assets/credit.png';
import scoreIcon from '../assets/score.png';
import notificationIcon from '../assets/notification.png';
import lightIcon from '../assets/light.png';
import iphoneFrame from '../assets/iphone.png';
import lockIcon from '../assets/lock.png';
import wonIcon from '../assets/won.png';

const HomePage = () => {
  const navigate = useNavigate();
  const sectionsRef = useRef<HTMLDivElement>(null);
  const currentSectionRef = useRef(0);
  const isScrollingRef = useRef(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // 로그인 상태 확인
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setIsLoggedIn(!!userId);
  }, []);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleDashboard = () => {
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  const handleFeatureAccess = () => {
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    alert('로그아웃되었습니다.');
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrollingRef.current) return;
      
      const direction = e.deltaY > 0 ? 1 : -1;
      const sections = sectionsRef.current?.children;
      
      if (!sections) return;
      
      const nextSection = currentSectionRef.current + direction;
      
      if (nextSection >= 0 && nextSection < sections.length) {
        isScrollingRef.current = true;
        currentSectionRef.current = nextSection;
        
        const targetSection = sections[nextSection] as HTMLElement;
        targetSection.scrollIntoView({ behavior: 'smooth' });
        
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 1000);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrollingRef.current) return;
      
      const sections = sectionsRef.current?.children;
      if (!sections) return;
      
      let direction = 0;
      
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        direction = 1;
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        direction = -1;
      }
      
      if (direction !== 0) {
        e.preventDefault();
        
        const nextSection = currentSectionRef.current + direction;
        
        if (nextSection >= 0 && nextSection < sections.length) {
          isScrollingRef.current = true;
          currentSectionRef.current = nextSection;
          
          const targetSection = sections[nextSection] as HTMLElement;
          targetSection.scrollIntoView({ behavior: 'smooth' });
          
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 1000);
        }
      }
    };

    const container = sectionsRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const scrollToSection = (index: number) => {
    const sections = sectionsRef.current?.children;
    if (!sections || index < 0 || index >= sections.length) return;
    
    isScrollingRef.current = true;
    currentSectionRef.current = index;
    
    const targetSection = sections[index] as HTMLElement;
    targetSection.scrollIntoView({ behavior: 'smooth' });
    
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  return (
    <div className="home-container">
      {/* 헤더 */}
      <header className="home-header">
        <div className="header-content">
                             <div className="logo-section">
                     <div className="logo">
                       <div className="logo-icon">
                         <img src={wonIcon} alt="payments" />
                       </div>
                       <span className="logo-text">payments</span>
                     </div>
                   </div>
          
          <nav className="header-nav">
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(0); }}>
              홈
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(1); }}>
              서비스
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(2); }}>
              앱 기능
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(3); }}>
              보안
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(4); }}>
              시작하기
            </a>
          </nav>

          <div className="header-actions">
            {isLoggedIn ? (
              <>
                <button className="dashboard-btn" onClick={handleDashboard}>
                  대시보드
                </button>
                <button className="logout-btn" onClick={handleLogout}>
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <button className="login-btn" onClick={handleLogin}>
                  로그인
                </button>
                <button className="signup-btn" onClick={handleSignup}>
                  가입하기
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* 슬라이스 컨테이너 */}
      <div className="sections-container" ref={sectionsRef}>
        {/* 첫 번째 슬라이스 - 히어로 */}
        <section className="hero-slide">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                금융을 넘어<br />
                일상을 더 편리하게
              </h1>
              <p className="hero-subtitle">
                간편하고 안전한 결제 서비스로<br />
                당신의 비즈니스를 성장시키세요
              </p>
              <div className="hero-buttons">
                <button className="primary-btn" onClick={handleFeatureAccess}>
                  {isLoggedIn ? '대시보드 바로가기' : '사업 시작하기'}
                </button>
                <button className="secondary-btn" onClick={() => scrollToSection(1)}>
                  서비스 둘러보기
                </button>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="visual-container">
                <div className="floating-card card-1">
                  <div className="card-content">
                    <div className="card-icon">💳</div>
                    <div className="card-text">
                      <div className="card-amount">₩58,000</div>
                      <div className="card-label">결제 완료</div>
                    </div>
                  </div>
                </div>
                
                <div className="floating-card card-2">
                  <div className="card-content">
                    <div className="card-icon">📊</div>
                    <div className="card-text">
                      <div className="card-amount">₩1,250,000</div>
                      <div className="card-label">월 매출</div>
                    </div>
                  </div>
                </div>
                
                <div className="floating-card card-3">
                  <div className="card-content">
                    <div className="card-icon">📈</div>
                    <div className="card-text">
                      <div className="card-amount">+15%</div>
                      <div className="card-label">성장률</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 스크롤 인디케이터 */}
          <div className="scroll-indicator">
            <div className="scroll-dots">
              <div className="dot active" onClick={() => scrollToSection(0)}></div>
              <div className="dot" onClick={() => scrollToSection(1)}></div>
              <div className="dot" onClick={() => scrollToSection(2)}></div>
              <div className="dot" onClick={() => scrollToSection(3)}></div>
              <div className="dot" onClick={() => scrollToSection(4)}></div>
            </div>
            <div className="scroll-text">스크롤하여 더 알아보기</div>
          </div>
        </section>

        {/* 두 번째 슬라이스 - 서비스 특징 */}
        <section className="features-slide">
          <div className="features-content">
            <h2 className="features-title">왜 payments를 선택해야 할까요?</h2>
            
                                 <div className="features-grid">
                       <div className="feature-card">
                         <div className="feature-icon">
                           <img src={creditIcon} alt="내 신용점수" />
                         </div>
                         <h3 className="feature-title">내 신용점수</h3>
                         <p className="feature-description">
                           KCB와 NICE 신용점수를<br />
                           한 곳에서 쉽게 확인하세요
                         </p>
                       </div>

                       <div className="feature-card">
                         <div className="feature-icon">
                           <img src={scoreIcon} alt="신용점수 올리기" />
                         </div>
                         <h3 className="feature-title">신용점수 올리기</h3>
                         <p className="feature-description">
                           통신비, 일반결제 내역을<br />
                           토스에서 직접 제출하여 신용점수를 올리세요
                         </p>
                       </div>

                       <div className="feature-card">
                         <div className="feature-icon">
                           <img src={notificationIcon} alt="신용관리 알림" />
                         </div>
                         <h3 className="feature-title">신용관리 알림</h3>
                         <p className="feature-description">
                           신용점수 변동 시 알림을 받아<br />
                           언제든지 신용점수를 확인하세요
                         </p>
                       </div>

                       <div className="feature-card">
                         <div className="feature-icon">
                           <img src={lightIcon} alt="신용관리 팁" />
                         </div>
                         <h3 className="feature-title">신용관리 팁</h3>
                         <p className="feature-description">
                           신용점수 관리가 어려우신가요?<br />
                           신용관리 팁 콘텐츠를 읽어보세요
                         </p>
                       </div>
                     </div>
          </div>
          
          {/* 스크롤 인디케이터 */}
          <div className="scroll-indicator">
            <div className="scroll-dots">
              <div className="dot" onClick={() => scrollToSection(0)}></div>
              <div className="dot active" onClick={() => scrollToSection(1)}></div>
              <div className="dot" onClick={() => scrollToSection(2)}></div>
              <div className="dot" onClick={() => scrollToSection(3)}></div>
              <div className="dot" onClick={() => scrollToSection(4)}></div>
            </div>
          </div>
        </section>

        {/* 세 번째 슬라이스 - 앱 기능 소개 */}
        <section className="app-features-slide">
          <div className="app-features-content">
            <div className="app-features-text">
              <div className="vertical-text">
                <div className="text-line">간단하고 직관적인</div>
                <div className="text-line">결제 관리 시스템</div>
              </div>
            </div>

            <div className="app-mockup">
              <div className="phone-container">
                <img src={iphoneFrame} alt="iPhone" className="iphone-frame" />
                <div className="phone-screen">
                  <div className="app-header">
                    <div className="app-title">payments</div>
                    <div className="app-actions">
                      <div className="search-icon">🔍</div>
                      <div className="menu-icon">☰</div>
                    </div>
                  </div>

                  <div className="app-content">
                    <div className="balance-section">
                      <div className="balance-title">총 잔액</div>
                      <div className="balance-amount">₩2,450,000</div>
                      <div className="balance-change positive">+₩125,000 (5.4%)</div>
                    </div>

                    <div className="quick-actions">
                      <div className="action-item">
                        <div className="action-icon">💳</div>
                        <div className="action-text">결제</div>
                      </div>
                      <div className="action-item">
                        <div className="action-icon">📊</div>
                        <div className="action-text">정산</div>
                      </div>
                      <div className="action-item">
                        <div className="action-icon">📈</div>
                        <div className="action-text">분석</div>
                      </div>
                      <div className="action-item">
                        <div className="action-icon">⚙️</div>
                        <div className="action-text">설정</div>
                      </div>
                    </div>

                    <div className="recent-transactions">
                      <div className="section-header">
                        <h3>최근 거래</h3>
                        <div className="view-all">전체보기</div>
                      </div>
                      
                      <div className="transaction-list">
                        <div className="transaction-item">
                          <div className="transaction-icon">🛒</div>
                          <div className="transaction-details">
                            <div className="transaction-title">온라인 쇼핑몰</div>
                            <div className="transaction-time">2분 전</div>
                          </div>
                          <div className="transaction-amount">-₩45,000</div>
                        </div>
                        
                        <div className="transaction-item">
                          <div className="transaction-icon">💰</div>
                          <div className="transaction-details">
                            <div className="transaction-title">정산 완료</div>
                            <div className="transaction-time">1시간 전</div>
                          </div>
                          <div className="transaction-amount positive">+₩125,000</div>
                        </div>
                        
                        <div className="transaction-item">
                          <div className="transaction-icon">🍕</div>
                          <div className="transaction-details">
                            <div className="transaction-title">피자 배달</div>
                            <div className="transaction-time">3시간 전</div>
                          </div>
                          <div className="transaction-amount">-₩28,000</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="app-nav">
                    <div className="nav-item active">
                      <div className="nav-icon">🏠</div>
                      <div className="nav-text">홈</div>
                    </div>
                    <div className="nav-item">
                      <div className="nav-icon">📊</div>
                      <div className="nav-text">통계</div>
                    </div>
                    <div className="nav-item">
                      <div className="nav-icon">💳</div>
                      <div className="nav-text">결제</div>
                    </div>
                    <div className="nav-item">
                      <div className="nav-icon">👤</div>
                      <div className="nav-text">내정보</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="app-features-text-right">
              <div className="vertical-text">
                <div className="text-line">비즈니스 성장을 위한</div>
                <div className="text-line">스마트한 분석 도구</div>
              </div>
            </div>
          </div>

          {/* 스크롤 인디케이터 */}
          <div className="scroll-indicator">
            <div className="scroll-dots">
              <div className="dot" onClick={() => scrollToSection(0)}></div>
              <div className="dot" onClick={() => scrollToSection(1)}></div>
              <div className="dot active" onClick={() => scrollToSection(2)}></div>
              <div className="dot" onClick={() => scrollToSection(3)}></div>
              <div className="dot" onClick={() => scrollToSection(4)}></div>
            </div>
          </div>
        </section>

        {/* 네 번째 슬라이스 - 보안 소개 */}
        <section className="security-slide">
          <div className="security-content">
            <div className="security-text">
              <h2 className="security-title">최고 수준의 보안</h2>
              <p className="security-subtitle">
                고객님의 자산과 정보를 보호하기 위해<br />
                최첨단 보안 기술을 적용했습니다
              </p>
              
              <div className="security-features">
                <div className="security-feature">
                  <div className="security-icon">🔐</div>
                  <div className="security-feature-content">
                    <h4>256비트 암호화</h4>
                    <p>모든 결제 정보는 256비트 SSL 암호화로 보호됩니다</p>
                  </div>
                </div>
                
                <div className="security-feature">
                  <div className="security-icon">🛡️</div>
                  <div className="security-feature-content">
                    <h4>실시간 모니터링</h4>
                    <p>24시간 보안 시스템이 의심스러운 거래를 감지하고 차단합니다</p>
                  </div>
                </div>
                
                <div className="security-feature">
                  <div className="security-icon">✅</div>
                  <div className="security-feature-content">
                    <h4>PCI DSS 인증</h4>
                    <p>국제 보안 표준을 준수하여 안전한 결제 환경을 제공합니다</p>
                  </div>
                </div>
              </div>
            </div>
            
                                 <div className="security-visual">
                       <div className="lock-container">
                         <img src={lockIcon} alt="보안" className="lock-image" />
                       </div>
                     </div>
          </div>
          
          {/* 스크롤 인디케이터 */}
          <div className="scroll-indicator">
            <div className="scroll-dots">
              <div className="dot" onClick={() => scrollToSection(0)}></div>
              <div className="dot" onClick={() => scrollToSection(1)}></div>
              <div className="dot" onClick={() => scrollToSection(2)}></div>
              <div className="dot active" onClick={() => scrollToSection(3)}></div>
              <div className="dot" onClick={() => scrollToSection(4)}></div>
            </div>
          </div>
        </section>

        {/* 다섯 번째 슬라이스 - CTA */}
        <section className="cta-slide">
          <div className="cta-content">
            <h2 className="cta-title">
              지금 바로 시작하세요
            </h2>
            <p className="cta-description">
              간단한 가입으로 즉시 결제 서비스를 이용할 수 있습니다.<br />
              무료 체험으로 payments의 모든 기능을 경험해보세요.
            </p>
            <div className="cta-buttons">
              <button className="cta-button" onClick={handleFeatureAccess}>
                {isLoggedIn ? '대시보드 바로가기' : '무료로 시작하기'}
              </button>
              <button className="cta-button-secondary" onClick={handleFeatureAccess}>
                {isLoggedIn ? '서비스 체험하기' : '데모 체험하기'}
              </button>
            </div>
            <div className="cta-features">
              <div className="cta-feature">
                <div className="cta-feature-icon">⚡</div>
                <span>5분 만에 가입 완료</span>
              </div>
              <div className="cta-feature">
                <div className="cta-feature-icon">💰</div>
                <span>수수료 무료 체험</span>
              </div>
              <div className="cta-feature">
                <div className="cta-feature-icon">🔒</div>
                <span>안전한 보안</span>
              </div>
            </div>
          </div>
          
          {/* 푸터 */}
          <footer className="home-footer">
            <div className="footer-content">
              <div className="footer-section">
                <h4>서비스</h4>
                <ul>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); handleFeatureAccess(); }}>결제 서비스</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); handleFeatureAccess(); }}>정산 서비스</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); handleFeatureAccess(); }}>개발 가이드</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>고객지원</h4>
                <ul>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); handleFeatureAccess(); }}>고객센터</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); handleFeatureAccess(); }}>1:1 문의</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); handleFeatureAccess(); }}>자주 묻는 질문</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>회사</h4>
                <ul>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); handleFeatureAccess(); }}>회사 소개</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); handleFeatureAccess(); }}>채용</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); handleFeatureAccess(); }}>개인정보처리방침</a></li>
                </ul>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p>&copy; 2024 payments. All rights reserved.</p>
            </div>
          </footer>
          
          {/* 스크롤 인디케이터 */}
          <div className="scroll-indicator">
            <div className="scroll-dots">
              <div className="dot" onClick={() => scrollToSection(0)}></div>
              <div className="dot" onClick={() => scrollToSection(1)}></div>
              <div className="dot" onClick={() => scrollToSection(2)}></div>
              <div className="dot" onClick={() => scrollToSection(3)}></div>
              <div className="dot active" onClick={() => scrollToSection(4)}></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage; 