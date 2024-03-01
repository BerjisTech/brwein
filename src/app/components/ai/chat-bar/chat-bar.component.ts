import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrl: './chat-bar.component.scss'
})
export class ChatBarComponent {
  constructor() { }

  loadResults(prompt: string) {
    // Your code here
    alert(prompt)
  }
}
