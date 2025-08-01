import { API_ENDPOINTS } from '../constants/api';
import { apiRequest } from './apiUtil';

export interface ChatMessage {
  id: number;
  senderId: number;
  userName: string;
  message: string;
  sendAt: string;
}

class ChatService {
  async getChatLog(): Promise<ChatMessage[]> {
    try {
      const result = await apiRequest<ChatMessage[]>(API_ENDPOINTS.CHAT_LOG, {
        method: 'GET',
      });
      return result;
    } catch (error) {
      console.error('채팅 로그 불러오기 실패:', error);
      return [];
    }
  }
}

export const chatService = new ChatService();
