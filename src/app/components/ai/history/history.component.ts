import { Component } from '@angular/core';
import { AiChat, AiChats } from '../../../interfaces/ai-chat';
import { AiService } from '../../../services/ai.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {

  constructor(
    private aiService: AiService,
    private userService: UserService
  ) { }

  chatsLoaded = false;

  aiChat: AiChat = {
    id: 'UUID-UUID-UUID-UUID-UUID',
    ai_id: 'UUID-UUID-UUID-UUID-UUID',
    user_id: 'UUID-UUID-UUID-UUID-UUID',
    prompt: 'string',
    response: 'string',
    created_at: 'string',
    updated_at: 'string',
    user: this.userService.getGuestUser()
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
      user: this.userService.getGuestUser()
    },
    {
      id: 'UUID-UUID-UUID-UUID-UUID',
      title: "aaaa",
      created_at: 'string',
      updated_at: 'string',
      user_id: 'UUID-UUID-UUID-UUID-UUID',
      ai_id: 'UUID-UUID-UUID-UUID-UUID',
      aiChat: [this.aiChat],
      user: this.userService.getGuestUser()
    },
    {
      id: 'UUID-UUID-UUID-UUID-UUID',
      title: "aaaa",
      created_at: 'string',
      updated_at: 'string',
      user_id: 'UUID-UUID-UUID-UUID-UUID',
      ai_id: 'UUID-UUID-UUID-UUID-UUID',
      aiChat: [this.aiChat],
      user: this.userService.getGuestUser()
    }
  ]

  ngOnInit() {
    this.aiService.aiChats.subscribe(chats => {
      this.aiChats = [...chats, ...this.aiChats];
    });
  }

  updateActiveChat(chat: AiChats) {
    this.aiService.changeChat(chat);
    // this.aiService.addChat(chat);
  }
}
