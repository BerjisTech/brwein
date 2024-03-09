import { Component } from '@angular/core';

import { Course, Lesson } from '../../../interfaces/course';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  constructor(private userService: UserService) { }

  randomNumber = Math.floor(Math.random() * 100);
  dummyLessons: Lesson[] = [
    { id: "UUID-UUID-UUID-UUID-UUID", name: 'Lesson 1', description: 'This is the first lesson' },
    { id: "UUID-UUID-UUID-UUID-UUID", name: 'Lesson 2', description: 'This is the second lesson' },
    { id: "UUID-UUID-UUID-UUID-UUID", name: 'Lesson 3', description: 'This is the third lesson' },
    { id: "UUID-UUID-UUID-UUID-UUID", name: 'Lesson 4', description: 'This is the fourth lesson' },
    { id: "UUID-UUID-UUID-UUID-UUID", name: 'Lesson 5', description: 'This is the fifth lesson' },
  ];

  dummyCourses: Course[] = [
    { id: "UUID-UUID-UUID-UUID-UUID", name: 'Course 1', description: 'This is the first course', lessons: this.dummyLessons, level: 'Beginner', organizer: this.userService.getGuestUser(), poster: 'https://picsum.photos/300/300?random=1', progress: Math.floor(Math.random() * 100) },
    { id: "UUID-UUID-UUID-UUID-UUID", name: 'Course 2', description: 'This is the second course', lessons: this.dummyLessons, level: 'Intermediate', organizer: this.userService.getGuestUser(), poster: 'https://picsum.photos/300/300?random=2', progress: Math.floor(Math.random() * 100) },
    { id: "UUID-UUID-UUID-UUID-UUID", name: 'Course 3', description: 'This is the third course', lessons: this.dummyLessons, level: 'Expert', organizer: this.userService.getGuestUser(), poster: 'https://picsum.photos/300/300?random=3', progress: Math.floor(Math.random() * 100) },
    { id: "UUID-UUID-UUID-UUID-UUID", name: 'Course 4', description: 'This is the fourth course', lessons: this.dummyLessons, level: 'Beginner', organizer: this.userService.getGuestUser(), poster: 'https://picsum.photos/300/300?random=4', progress: Math.floor(Math.random() * 100) },
    { id: "UUID-UUID-UUID-UUID-UUID", name: 'Course 5', description: 'This is the fifth course', lessons: this.dummyLessons, level: 'Beginner', organizer: this.userService.getGuestUser(), poster: 'https://picsum.photos/300/300?random=5', progress: Math.floor(Math.random() * 100) },
  ];

}
