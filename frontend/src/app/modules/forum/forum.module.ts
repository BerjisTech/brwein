import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainComponent } from '../../components/forums/main/main.component';

import { ForumRoutingModule } from './forum-routing.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ForumRoutingModule
  ]
})
export class ForumModule { }
