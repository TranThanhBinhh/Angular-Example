import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/utils/components/modal/modal.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  addCategory() {
    this.modalComponent.openModal();
  }

}
