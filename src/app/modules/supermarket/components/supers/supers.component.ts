import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/utils/components/modal/modal.component';

@Component({
  selector: 'app-supers',
  templateUrl: './supers.component.html',
  styleUrls: ['./supers.component.scss']
})
export class SupersComponent {

  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  addSupermarket() {
    this.modalComponent.openModal();
  }

}
