import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrl: './chat-bar.component.scss'
})
export class ChatBarComponent {
  constructor() { }
  @Output() promptSubmit = new EventEmitter<string>();

  loadResults(event: Event, prompt: string) {
    event.preventDefault();
    this.promptSubmit.emit(prompt);
  }
}
