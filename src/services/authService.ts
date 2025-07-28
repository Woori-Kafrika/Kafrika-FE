import { API_BASE_URL, API_ENDPOINTS } from '../constants/api';

export interface LoginRequest {
  id: string;
  pw: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

class AuthService {
  private async makeRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, defaultOptions);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  async login(credentials: LoginRequest): Promise<LoginResponse> {
    try {
      const response = await this.makeRequest<ApiResponse<LoginResponse>>(API_ENDPOINTS.LOGIN, {
        method: 'POST',
        body: JSON.stringify(credentials),
      });

      if (response.success) {
        return {
          success: true,
          message: '로그인 성공',
          token: response.data?.token,
        };
      } else {
        return {
          success: false,
          message: response.message || '로그인 실패',
        };
      }
    } catch (error) {
      return {
        success: false,
        message: '로그인 중 오류가 발생했습니다.',
      };
    }
  }
}

export const authService = new AuthService(); 