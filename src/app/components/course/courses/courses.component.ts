import { Component, HostListener} from '@angular/core';

import { Course, Lesson } from '../../../interfaces/course';
import { UserService } from '../../../services/user.service';
import { UIService } from '../../../services/ui.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  screenWidth: number = 0;
  hasCustomSidebar: boolean = false;

  constructor(
    private uiService: UIService,
    private userService: UserService
  ) {
    this.hasCustomSidebar = this.uiService.getCustomSideBar();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
    this.hasCustomSidebar = this.screenWidth < 900;
    this.uiService.setCustomSideBar(this.hasCustomSidebar);
    console.log(this.screenWidth);
    console.log(this.hasCustomSidebar);
  }

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
