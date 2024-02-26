import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedLayoutComponent } from '../../components/nliv/shared-layout/shared-layout.component';
import { HomeComponent } from '../../components/nliv/home/home.component';
import { AboutComponent } from '../../components/nliv/about/about.component';
import { ContactComponent } from '../../components/nliv/contact/contact.component';
import { NotFoundComponent } from '../../components/nliv/not-found/not-found.component';
import { Error500Component } from '../../components/nliv/error500/error500.component';
import { GlobalSearchComponent } from '../../components/nliv/global-search/global-search.component';

const routes: Routes = [
  { 
    path: '', 
    component: SharedLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 's/:term', component: GlobalSearchComponent},
      { path: '404', component: NotFoundComponent },
      { path: '500', component: Error500Component },
      { path: '**', redirectTo: '404' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NLIVRoutingModule { }