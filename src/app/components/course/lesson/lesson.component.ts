import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss'
})
export class LessonComponent {
  distanceFrom100: number = 0;
  updateVideoProgressByClick(event: MouseEvent, element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    this.distanceFrom100 = (x / rect.width * 100);
  }
}
