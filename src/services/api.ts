// API 기본 설정
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

// API 응답 타입 정의
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// 로그인 요청/응답 타입
interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

// 회원가입 요청/응답 타입
interface RegisterRequest {
  email: string;
  password: string;
  name?: string;
}

interface RegisterResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

// 채팅 메시지 타입
interface ChatMessage {
  id: string;
  text: string;
  sender: string;
  timestamp: string;
  roomId?: string;
}

// API 호출 함수들
export const api = {
  // 로그인
  async login(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || '로그인에 실패했습니다.');
      }

      return { success: true, data };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : '로그인에 실패했습니다.' 
      };
    }
  },

  // 회원가입
  async register(userData: RegisterRequest): Promise<ApiResponse<RegisterResponse>> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || '회원가입에 실패했습니다.');
      }

      return { success: true, data };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : '회원가입에 실패했습니다.' 
      };
    }
  },

  // 채팅 메시지 조회
  async getMessages(roomId?: string): Promise<ApiResponse<ChatMessage[]>> {
    try {
      const token = localStorage.getItem('token');
      const url = roomId 
        ? `${API_BASE_URL}/chat/messages?roomId=${roomId}`
        : `${API_BASE_URL}/chat/messages`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || '메시지 조회에 실패했습니다.');
      }

      return { success: true, data };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : '메시지 조회에 실패했습니다.' 
      };
    }
  },

  // 채팅 메시지 전송
  async sendMessage(message: Omit<ChatMessage, 'id' | 'timestamp'>): Promise<ApiResponse<ChatMessage>> {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/chat/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || '메시지 전송에 실패했습니다.');
      }

      return { success: true, data };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : '메시지 전송에 실패했습니다.' 
      };
    }
  },
};

export type { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse, ChatMessage }; 