import { Component, Input } from '@angular/core';
import { Course } from '../../../interfaces/course';
import { Router } from '@angular/router';
import { UUID } from 'crypto';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input() course: Course = {} as Course;


  constructor(private router: Router) {}
  
  generateBackgroundGradientFromImage(imageUrl: string) {
    return `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`;
  }

  loadCourse(id: UUID){
    this.router.navigate(['/courses/', id]);
  }
}
