import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AsideComponent } from './components/aside/aside.component';
import { SupermarketModule } from '../modules/supermarket/supermarket.module';


@NgModule({
  declarations: [
    AsideComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    SupermarketModule
  ]
})
export class DashboardModule { }
