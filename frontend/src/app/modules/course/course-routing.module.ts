import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '../../components/course/main/main.component';
import { CoursesComponent } from '../../components/course/courses/courses.component';
import { CourseComponent } from '../../components/course/course/course.component';
import { LessonComponent } from '../../components/course/lesson/lesson.component';
import { LessonsComponent } from '../../components/course/lessons/lessons.component';
import { SettingsComponent } from '../../components/course/settings/settings.component';
import { SearchComponent } from '../../components/course/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: CoursesComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'search', component: SearchComponent },
      { path: ':course_id', component: CourseComponent },
      { path: ':course_id/lessons', component: LessonsComponent },
      { path: ':course_id/lessons/:lesson_id', component: LessonComponent },
      { path: ':course_id/lesson/:lesson_id', component: LessonComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
