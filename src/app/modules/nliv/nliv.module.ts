import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NLIVRoutingModule } from './nliv-routing.module';

import { HomeComponent } from '../../components/nliv/home/home.component';
import { AboutComponent } from '../../components/nliv/about/about.component';
import { ContactComponent } from '../../components/nliv/contact/contact.component';
import { NotFoundComponent } from '../../components/nliv/not-found/not-found.component';
import { Error500Component } from '../../components/nliv/error500/error500.component';
import { GlobalSearchComponent } from '../../components/nliv/global-search/global-search.component';
import { SharedLayoutComponent } from '../../components/nliv/shared-layout/shared-layout.component';
import { UserActionsComponent } from '../../components/shared/user-actions/user-actions.component';
import { GlobalSearchResultsComponent } from '../../components/shared/global-search-results/global-search-results.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    Error500Component,
    GlobalSearchComponent,
    SharedLayoutComponent,
    UserActionsComponent,
    GlobalSearchResultsComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    NLIVRoutingModule
  ]
})
export class NLIVModule { }
