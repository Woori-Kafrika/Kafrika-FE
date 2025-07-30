import { API_BASE_URL } from '../constants/api';

export interface ApiSuccess<T> {
  code: number;
  status: 'OK';
  message: string;
  result: T;
}

export interface ApiError {
  code: number;
  status: string;
  message: string;
  timestamp: string;
}

export class ApiException extends Error {
  code: number;
  status: string;

  constructor(error: ApiError) {
    super(error.message);
    this.code = error.code;
    this.status = error.status;
  }
}

export async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
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
    const data = await response.json();

    if (!response.ok || data.code !== 1000 || data.status !== 'OK') {
      throw new ApiException(data);
    }

    return data.result;
  } catch (error: any) {
    if (error instanceof ApiException) {
      throw error;
    }

    // 네트워크 오류 또는 응답 형식이 예외적일 때
    console.error('Unexpected API error:', error);
    throw new Error('서버와 통신 중 문제가 발생했습니다.');
  }
}
