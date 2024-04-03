import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainComponent } from '../../components/suppliers/main/main.component';
import { SuppliersComponent } from '../../components/suppliers/suppliers/suppliers.component';

import { SupplierRoutingModule } from './supplier-routing.module';


@NgModule({
  declarations: [
    MainComponent,
    SuppliersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SupplierRoutingModule
  ]
})
export class SupplierModule { }
