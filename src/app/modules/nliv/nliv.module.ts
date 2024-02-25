import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NLIVRoutingModule } from './nliv-routing.module';

import { HomeComponent } from '../../components/nliv/home/home.component';
import { AboutComponent } from '../../components/nliv/about/about.component';
import { ContactComponent } from '../../components/nliv/contact/contact.component';
import { NotFoundComponent } from '../../components/nliv/not-found/not-found.component';
import { Error500Component } from '../../components/nliv/error500/error500.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    Error500Component
  ],
  imports: [
    CommonModule,
    NLIVRoutingModule
  ]
})
export class NLIVModule { }
