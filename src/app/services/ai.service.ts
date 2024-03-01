import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AIChats } from '../interfaces/ai-chat';

@Injectable({
  providedIn: 'root'
})
export class AiService {

  constructor() { }

  private chatSource = new BehaviorSubject<AIChats | null>(null);
  currentChat = this.chatSource.asObservable();

  changeChat(chat: AIChats) {
    this.chatSource.next(chat);
  }
}