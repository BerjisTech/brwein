import { Component, Input} from '@angular/core';
import { AiChat } from '../../../interfaces/ai-chat';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  @Input() chat: AiChat|null = null;;
}