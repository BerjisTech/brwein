import { Component, Injectable, ViewChild, ElementRef, HostListener } from '@angular/core';
import { UIService } from '../../../services/ui.service';
import { User } from '../../../interfaces/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss'
})
export class LessonComponent {
  @ViewChild('lessonAttendeesPane') lessonAttendeesPane!: ElementRef;

  distanceFrom100: number = 0;
  lessonAttendeesPaneWidth: number = 0;
  attendeesToShow: number = 0;
  lessonAttendees: User[] = this.userService.generateRandomServices(25);

  constructor(private uiService: UIService, private userService: UserService) {
    this.uiService.setCustomSideBar(true);
  }

  ngAfterViewInit() {
    this.calculateAttendeesToShow();
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.calculateAttendeesToShow();
  };

  updateVideoProgressByClick(event: MouseEvent, element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    this.distanceFrom100 = (x / rect.width * 100);
  }

  calculateAttendeesToShow() {
    this.lessonAttendeesPaneWidth = this.lessonAttendeesPane.nativeElement.offsetWidth;
    this.attendeesToShow = Math.floor((this.lessonAttendeesPaneWidth - 150) / 150);
  }
}
