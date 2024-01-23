import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './components/modal/modal.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NotifyComponent } from './components/notify/notify.component';


@NgModule({
  declarations: [
    LoadingComponent,
    ModalComponent,
    NotifyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    LoadingComponent,
    NotifyComponent
  ]
})
export class UtilsModule { }
