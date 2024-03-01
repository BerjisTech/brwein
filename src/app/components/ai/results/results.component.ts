import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnChanges {
  @Input() prompt: string = '';
  prompts: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['prompt']) {
      this.prompts.push(this.prompt);
    }
  }
}