import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    LoadingComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    LoadingComponent
  ]
})
export class UtilsModule { }
