import { API_ENDPOINTS } from '../constants/api';
import { apiRequest } from './apiUtil';

export interface LoginRequest {
  id: string;
  pw: string;
}
export interface SignupRequest {
  name: string;
  id: string;
  pw: string;
}

export class AuthService {
  async login(payload: LoginRequest): Promise<{ success: boolean; message: string }> {
    try {
      const result = await apiRequest<{ userId: string }>(API_ENDPOINTS.LOGIN, {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      if (result.userId !== undefined) {
        localStorage.setItem('userId', result.userId);
      }

      return {
        success: true,
        message: '로그인 성공',
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.message || '로그인 중 오류가 발생했습니다.',
      };
    }
  }

  async signup(payload: SignupRequest): Promise<{ success: boolean; message: string; userId?: string }> {
    try {
      const result = await apiRequest<{ isSuccess: boolean; userId?: string }>(API_ENDPOINTS.SIGNUP, {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      console.log(result.isSuccess);
      
      if (result.isSuccess && result.userId) {
        localStorage.setItem('userId', result.userId);
      }
      
      return {
        success: result.isSuccess,
        message: '회원가입 성공',
        userId: result.userId,
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.message || '회원가입 중 오류가 발생했습니다.',
      };
    }
  }
}

export const authService = new AuthService();
