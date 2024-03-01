import { Component } from '@angular/core';
import { AiChat, AiChats } from '../../../interfaces/ai-chat';
import { AiService } from '../../../services/ai.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {

  aiChat: AiChat = {
    id: 'UUID-UUID-UUID-UUID-UUID',
    ai_id: 'UUID-UUID-UUID-UUID-UUID',
    user_id: 'UUID-UUID-UUID-UUID-UUID',
    prompt: 'string',
    response: 'string',
    created_at: 'string',
    updated_at: 'string',
    user: 'User'
  };

  aiChats: AiChats[] = [
    {
      id: 'UUID-UUID-UUID-UUID-UUID',
      title: "aaaa",
      created_at: 'string',
      updated_at: 'string',
      user_id: 'UUID-UUID-UUID-UUID-UUID',
      ai_id: 'UUID-UUID-UUID-UUID-UUID',
      aiChat: [this.aiChat],
      user: 'User',
    },
    {
      id: 'UUID-UUID-UUID-UUID-UUID',
      title: "aaaa",
      created_at: 'string',
      updated_at: 'string',
      user_id: 'UUID-UUID-UUID-UUID-UUID',
      ai_id: 'UUID-UUID-UUID-UUID-UUID',
      aiChat: [this.aiChat],
      user: 'User',
    },
    {
      id: 'UUID-UUID-UUID-UUID-UUID',
      title: "aaaa",
      created_at: 'string',
      updated_at: 'string',
      user_id: 'UUID-UUID-UUID-UUID-UUID',
      ai_id: 'UUID-UUID-UUID-UUID-UUID',
      aiChat: [this.aiChat],
      user: 'User',
    }
  ]

  constructor(private aiService: AiService) {}

  updateActiveChat(chat: any) {
    this.aiService.changeChat(chat);
  }
}
