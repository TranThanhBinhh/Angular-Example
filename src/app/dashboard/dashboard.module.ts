import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AsideComponent } from './components/aside/aside.component';
import { ProductsModule } from '../products/products.module';


@NgModule({
  declarations: [
    DashboardComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ProductsModule
  ]
})
export class DashboardModule { }
