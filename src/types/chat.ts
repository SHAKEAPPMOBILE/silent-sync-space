
export interface ChatMessage {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
}

export interface Chat {
  id: string;
  participants: string[];
  eventType: string;
  city: string;
  createdAt: Date;
  messages: ChatMessage[];
}
