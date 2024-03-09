import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainComponent } from '../../components/course/main/main.component';
import { CoursesComponent } from '../../components/course/courses/courses.component';
import { CourseComponent } from '../../components/course/course/course.component';
import { LessonComponent } from '../../components/course/lesson/lesson.component';
import { LessonsComponent } from '../../components/course/lessons/lessons.component';
import { SettingsComponent } from '../../components/course/settings/settings.component';
import { SearchComponent } from '../../components/course/search/search.component';
import { CourseCardComponent } from '../../components/course/course-card/course-card.component';

import { CourseRoutingModule } from './course-routing.module';


@NgModule({
  declarations: [
    MainComponent,
    CoursesComponent,
    CourseComponent,
    LessonComponent,
    LessonsComponent,
    SettingsComponent,
    SearchComponent,
    CourseCardComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
