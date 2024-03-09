import { Component, Input } from '@angular/core';
import { Course } from '../../../interfaces/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input() course: Course = {} as Course;


  generateBackgroundGradientFromImage(imageUrl: string) {
    return `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`;
  }
}
