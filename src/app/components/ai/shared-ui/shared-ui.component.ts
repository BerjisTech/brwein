import { Component } from '@angular/core';
import { AiChats, AiChat } from '../../../interfaces/ai-chat';
import { AiService } from '../../../services/ai.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-shared-ui',
  templateUrl: './shared-ui.component.html',
  styleUrl: './shared-ui.component.scss'
})
export class SharedUIComponent {
  prompt: string = '';
  aiChats: AiChats | null = null;
  chat: AiChat | null = null;

  constructor(
    private aiService: AiService,
    private userService: UserService
  ) {
    this.aiService.currentChat.subscribe(chat => this.aiChats = chat);
  }
  

  addAiChat(prompt: string) {
    if (this.aiChats) {
      const newAiChat: AiChat = {
        id: 'UUID-UUID-UUID-UUID-UUID',
        ai_id: 'UUID-UUID-UUID-UUID-UUID',
        user_id: 'UUID-UUID-UUID-UUID-UUID',
        prompt: prompt,
        response: 'string',
        created_at: 'string',
        updated_at: 'string',
        user: this.userService.getGuestUser()
      };
      this.aiChats.aiChat.push(newAiChat);
    } else {
      const newAiChat: AiChat = {
        id: 'UUID-UUID-UUID-UUID-UUID',
        ai_id: 'UUID-UUID-UUID-UUID-UUID',
        user_id: 'UUID-UUID-UUID-UUID-UUID',
        prompt: prompt,
        response: 'string',
        created_at: 'string',
        updated_at: 'string',
        user: this.userService.getGuestUser()
      };
      this.aiChats = {
        aiChat: [newAiChat],
        id: 'UUID-UUID-UUID-UUID-UUID',
        title: prompt,
        created_at: 'string',
        updated_at: 'string',
        user_id: 'UUID-UUID-UUID-UUID-UUID',
        ai_id: 'UUID-UUID-UUID-UUID-UUID',
        user: this.userService.getCurrentUser()
      };
    }
  }
}
