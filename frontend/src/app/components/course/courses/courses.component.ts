import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { Course, Lesson } from '../../../interfaces/course';
import { UserService } from '../../../services/user.service';
import { UIService } from '../../../services/ui.service';

@Component({
  selector: 'app-course',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  flexDirection: string = "row"; // row | column
  growToFullWidth: string = "w-1/2";
  screenWidth: number = 0;

  constructor(private userService: UserService, private uiService: UIService, private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.setActive("my_courses")
    this.active_stats_tab = "learning_hours"
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
    this.uiService.setInnerPaneSize(this.screenWidth < 900 ? 100 : 400);
    this.flexDirection = this.screenWidth > 900 ? "row" : "col";
    this.growToFullWidth = this.screenWidth > 900 ? "w-1/2" : "w-full";
    console.log(this.screenWidth)
  }

  my_courses: boolean = false;
  all_courses: boolean = false;
  new_courses: boolean = false;
  top_rated: boolean = false;
  most_popular: boolean = false;
  active_stats_tab: string = 'learning_hours';

  learningHoursData = [
    {
      name: 'Learning Hours',
      series: [
        { name: 'mon', value: 1 },
        { name: 'tue', value: 2.6 },
        { name: 'wed', value: 3.8 },
        { name: 'thur', value: 5 },
        { name: 'fri', value: 4.1 },
        { name: 'sat', value: 5.5 },
        { name: 'sun', value: 6 }
      ]
    }
  ];

  myCoursesData = [
    {
      name: 'My Courses',
      series: [
        { name: 'X', value: 50 },
        { name: 'Y', value: 150 },
        { name: 'Z', value: 250 }
      ]
    }
  ];

  myLessons: Lesson[] = [
    { id: "UUID-UUID-UUID-UUID-UUID", name: 'Lesson 1', description: 'This is the first lesson' },
    { id: "UUID-UUID-UUID-UUID-UUID", name: 'Lesson 2', description: 'This is the second lesson' },
    { id: "UUID-UUID-UUID-UUID-UUID", name: 'Lesson 3', description: 'This is the third lesson' },
    { id: "UUID-UUID-UUID-UUID-UUID", name: 'Lesson 4', description: 'This is the fourth lesson' },
    { id: "UUID-UUID-UUID-UUID-UUID", name: 'Lesson 5', description: 'This is the fifth lesson' },
  ];

  myCourses: Course[] = [
    { id: "UUID-UUID-UUID-UUID-UUID", name: 'Course 1', description: 'This is the first course', lessons: this.myLessons, level: 'Beginner', organizer: this.userService.getGuestUser(), poster: 'https://picsum.photos/300/300?random=1', progress: Math.floor(Math.random() * 100), rating: Math.floor(Math.random() * 5) },
    { id: "UUID-UUID-UUID-UUID-UUID", name: 'Course 2', description: 'This is the second course', lessons: this.myLessons, level: 'Intermediate', organizer: this.userService.getGuestUser(), poster: 'https://picsum.photos/300/300?random=2', progress: Math.floor(Math.random() * 100), rating: Math.floor(Math.random() * 5) },
    { id: "UUID-UUID-UUID-UUID-UUID", name: 'Course 3', description: 'This is the third course', lessons: this.myLessons, level: 'Expert', organizer: this.userService.getGuestUser(), poster: 'https://picsum.photos/300/300?random=3', progress: Math.floor(Math.random() * 100), rating: Math.floor(Math.random() * 5) },
    { id: "UUID-UUID-UUID-UUID-UUID", name: 'Course 4', description: 'This is the fourth course', lessons: this.myLessons, level: 'Beginner', organizer: this.userService.getGuestUser(), poster: 'https://picsum.photos/300/300?random=4', progress: Math.floor(Math.random() * 100), rating: Math.floor(Math.random() * 5) },
    { id: "UUID-UUID-UUID-UUID-UUID", name: 'Course 5', description: 'This is the fifth course', lessons: this.myLessons, level: 'Beginner', organizer: this.userService.getGuestUser(), poster: 'https://picsum.photos/300/300?random=5', progress: Math.floor(Math.random() * 100), rating: Math.floor(Math.random() * 5) },
  ];

  currentCourse: Course = this.myCourses[0];

  previousCourse() {
    let index = this.myCourses.indexOf(this.currentCourse);
    if (index == 0) {
      this.currentCourse = this.myCourses[this.myCourses.length - 1];
    } else {
      this.currentCourse = this.myCourses[index - 1];
    }
  }

  nextCourse() {
    let index = this.myCourses.indexOf(this.currentCourse);
    if (index == this.myCourses.length - 1) {
      this.currentCourse = this.myCourses[0];
    } else {
      this.currentCourse = this.myCourses[index + 1];
    }
  }


  setActive(activeButton: string) {
    // Reset all to false
    this.my_courses = false;
    this.all_courses = false;
    this.new_courses = false;
    this.top_rated = false;
    this.most_popular = false;

    // Set the clicked button to true
    switch (activeButton) {
      case 'my_courses':
        this.my_courses = true;
        break;
      case 'all_courses':
        this.all_courses = true;
        break;
      case 'new_courses':
        this.new_courses = true;
        break;
      case 'top_rated':
        this.top_rated = true;
        break;
      case 'most_popular':
        this.most_popular = true;
        break;
    }
  }

  completedCoursesCount = this.myCourses.filter(c => c.progress == 100).length;

  inProgressCoursesCount = this.myCourses.length - this.completedCoursesCount;
}
