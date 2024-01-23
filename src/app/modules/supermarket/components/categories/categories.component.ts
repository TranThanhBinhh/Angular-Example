import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'src/app/utils/components/modal/modal.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  createCategoryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  addCategory() {
    this.modalComponent.openModal();
  }

  createCategory() {
    if(this.createCategoryForm.valid) {
      console.log(this.createCategoryForm.value);
      this.createCategoryForm.reset();
    } else {
      console.log('Error');
    }
  }

}
