# Kafrika Frontend

<img width="500" height="500" alt="won-removebg-preview" src="https://github.com/user-attachments/assets/8291be1b-264b-43bb-a03b-7fffad266033" />


## 🚀 프로젝트 소개

KAFRIKA 팀은 우리페이먼츠와 협업하여 대용량 트래픽을 처리하는 클라우드 기반 시스템을 개발하는 팀입니다. 이 프로젝트는 React와 TypeScript를 사용하여 구축된 프론트엔드 애플리케이션입니다.

## ✨ 주요 기능

- **로그인/회원가입**: 사용자 인증 시스템
- **비밀번호 재설정**: 이메일을 통한 비밀번호 재설정
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 지원
- **리뉴얼 페이지**: 서비스 점검 시 안내 페이지

## 🛠 기술 스택

![React](https://img.shields.io/badge/React-18.0.0-61DAFB?style=plastic&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6?style=plastic&logo=typescript)
![React Router](https://img.shields.io/badge/React%20Router-6.0.0-CA4245?style=plastic&logo=react-router)
![CSS3](https://img.shields.io/badge/CSS3-3.0.0-1572B6?style=plastic&logo=css3)
![Node.js](https://img.shields.io/badge/Node.js-18.0.0-339933?style=plastic&logo=node.js)
![npm](https://img.shields.io/badge/npm-9.0.0-CB3837?style=plastic&logo=npm)

## 📱 페이지 화면

### 로그인 페이지
![로그인 페이지](https://github.com/user-attachments/assets/f6525622-4e17-4056-ab18-9fd48b524c69)

### 회원가입 페이지
![회원가입 페이지](https://github.com/user-attachments/assets/2df567f7-1ccf-4afc-b6b4-e7a2b1bf6c57)

### 비밀번호 재설정 페이지
![비밀번호 재설정 페이지](https://github.com/user-attachments/assets/dd9f26f9-9f3f-4d83-a429-66f155a79919)

### 리뉴얼 페이지
![리뉴얼 페이지](https://github.com/user-attachments/assets/188f5444-e731-43a0-8eb8-0f303247f7b9)


## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── auth/           # 인증 관련 컴포넌트
│   ├── common/         # 공통 컴포넌트
│   └── layout/         # 레이아웃 컴포넌트
├── pages/              # 페이지 컴포넌트
├── styles/             # CSS 스타일 파일
├── types/              # TypeScript 타입 정의
├── utils/              # 유틸리티 함수
└── constants/          # 상수 정의
```

## 🚀 시작하기

### 필수 요구사항

- Node.js 16.0.0 이상
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
# 개발 서버 시작
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 애플리케이션을 확인하세요.

### 빌드

```bash
# 프로덕션용 빌드
npm run build
```

## 📱 주요 페이지

- **로그인 페이지** (`/login`): 사용자 로그인
- **회원가입 페이지** (`/signup`): 새로운 사용자 등록
- **비밀번호 재설정 페이지** (`/find-password`): 비밀번호 재설정
- **리뉴얼 페이지** (`/renewal`): 서비스 점검 안내

## 🎨 디자인 시스템

- **색상**: 파란색 테마 (#3b82f6)
- **폰트**: 시스템 폰트 (Apple, BlinkMacSystemFont, Segoe UI)
- **반응형**: 모바일 우선 접근법

## 🔧 개발 환경 설정

### 환경 변수

`.env` 파일을 생성하고 다음 변수를 설정하세요:

```env
REACT_APP_API_BASE_URL=http://localhost:8081
```

### 백엔드 연결

백엔드 서버가 실행 중인지 확인하세요:

- 기본 포트: 8081
- CORS 설정: localhost:3000 허용

## 📝 스크립트

```bash
# 개발 서버 실행
npm start

# 테스트 실행
npm test

# 빌드
npm run build

# 빌드 결과물 분석
npm run eject
```

## 🔮 업데이트 계획

### 📋 단기 계획 (1-2주)

#### 채팅 문의 CRUD 구현

- [ ] **문의 작성 페이지** (`/inquiry/write`)
  - [ ] 문의 제목, 내용, 첨부파일 업로드
  - [ ] 문의 카테고리 선택 (결제, 기술지원, 기타)
  - [ ] 실시간 글자 수 카운터
- [ ] **문의 목록 페이지** (`/inquiry/list`)
  - [ ] 사용자별 문의 내역 조회
  - [ ] 문의 상태 표시 (답변 대기, 답변 완료)
  - [ ] 문의 날짜별 정렬 및 필터링
- [ ] **문의 상세 페이지** (`/inquiry/detail/:id`)
  - [ ] 문의 내용 및 답변 조회
  - [ ] 답변 완료 시 알림 기능
  - [ ] 문의 수정/삭제 기능

#### 채팅 상담창 구현

- [ ] **실시간 채팅 인터페이스**
  - [ ] WebSocket 연결을 통한 실시간 메시지 송수신
  - [ ] 채팅방 목록 및 대화 내역
  - [ ] 파일 첨부 기능 (이미지, 문서)
  - [ ] 타이핑 중 표시 기능
- [ ] **채팅 관리 기능**
  - [ ] 상담원 배정 시스템
  - [ ] 채팅 이력 저장 및 조회
  - [ ] 채팅방 상태 관리 (대기, 진행중, 종료)

### 🛠 기술적 개선사항

#### 상태 관리

- [ ] **Redux Toolkit 도입**
  - [ ] 전역 상태 관리
  - [ ] 개발자 도구 지원
- [ ] **React Query 도입**
  - [ ] 서버 상태 관리
  - [ ] 캐싱 및 동기화

#### 테스트 강화

- [ ] **단위 테스트**
  - [ ] Jest + React Testing Library
  - [ ] 컴포넌트별 테스트 커버리지 80% 이상
- [ ] **E2E 테스트**
  - [ ] Cypress를 통한 사용자 시나리오 테스트
  - [ ] CI/CD 파이프라인 통합

## 👥 팀

- **정서현**
- **신기범**
- **최홍석**
- **최소영**

---

© 2024 Won Payments. All Rights Reserved.
