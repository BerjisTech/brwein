import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AiChats } from '../interfaces/ai-chat';

@Injectable({
  providedIn: 'root'
})
export class AiService {

  constructor() { }

  private chatSource = new BehaviorSubject<AiChats | null>(null);
  currentChat = this.chatSource.asObservable();

  changeChat(chat: AiChats) {
    this.chatSource.next(chat);
  }
}