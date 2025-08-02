export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://113.198.66.77:18113';

export const WS_BASE_URL = process.env.REACT_APP_WS_BASE_URL || 'ws://113.198.66.77:18113';

export const API_ENDPOINTS = {
  LOGIN: '/auth/user/login',
  SIGNUP: '/auth/user/signup',
  USER_PROFILE: '/user/profile',
  CHAT_LOG: '/chat/log',
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export interface BaseApiSuccess<T> {
  code: number;
  status: string;
  message: string;
  result: T;
}

export interface BaseApiError {
  code: number;
  status: string;
  message: string;
  timestamp: string;
}
