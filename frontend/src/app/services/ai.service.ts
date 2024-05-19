import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AiChats } from '../interfaces/ai-chat';

@Injectable({
  providedIn: 'root'
})
export class AiService {

  constructor() { }

  private _currentChat = new BehaviorSubject<AiChats | null>(null);
  private _aiChats = new BehaviorSubject<AiChats[]>([]);

  currentChat = this._currentChat.asObservable();
  aiChats = this._aiChats.asObservable();

  changeChat(chat: AiChats) {
    this._currentChat.next(chat);
  }

  addChat(chat: AiChats) {
    const currentChats = this._aiChats.getValue();
    currentChats.unshift(chat);
    this._aiChats.next(currentChats);
  }
}