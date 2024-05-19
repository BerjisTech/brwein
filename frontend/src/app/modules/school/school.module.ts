import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SchoolRoutingModule } from './school-routing.module';

import { MainComponent } from '../../components/schools/main/main.component';
import { SchoolComponent } from '../../components/schools/school/school.component';


@NgModule({
  declarations: [
    MainComponent,
    SchoolComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SchoolRoutingModule
  ]
})
export class SchoolModule { }
