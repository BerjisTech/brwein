import { Component } from '@angular/core';
import { AIChats, AiChat } from '../../../interfaces/ai-chat';
import { AiService } from '../../../services/ai.service';

@Component({
  selector: 'app-shared-ui',
  templateUrl: './shared-ui.component.html',
  styleUrl: './shared-ui.component.scss'
})
export class SharedUIComponent {
  prompt: string = '';
  aiChats: AIChats | null = null;

  constructor(private aiService: AiService) {
    this.aiService.currentChat.subscribe(chat => this.aiChats = chat);
  }
}
