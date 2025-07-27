import { API_BASE_URL, API_ENDPOINTS, HTTP_STATUS } from '../constants/api';

export interface LoginRequest {
  id: string;
  pw: string;
}

export interface LoginResponse {
  success: boolean;
  message?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

class AuthService {
  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };

    try {
      const response = await fetch(url, defaultOptions);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API 요청 실패:', error);
      throw error;
    }
  }

  async login(credentials: LoginRequest): Promise<LoginResponse> {
    try {
      const response = await this.makeRequest<ApiResponse<LoginResponse>>(
        API_ENDPOINTS.LOGIN,
        {
          method: 'POST',
          body: JSON.stringify(credentials),
        }
      );

      return {
        success: response.success,
        message: response.message,
      };
    } catch (error) {
      console.error('로그인 실패:', error);
      throw error;
    }
  }
}

export const authService = new AuthService(); 