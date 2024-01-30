import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'src/app/utils/components/modal/modal.component';
import { Category } from '../../interfaces/category';
import { CategoriesService } from '../../services/categories.service';
import { NotifyService } from 'src/app/utils/services/notify.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  createCategoryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
  categories: Array<Category> = [];
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  constructor(private services: CategoriesService, private notifyService: NotifyService) { }

  ngOnInit() {
    this.getCategories();
  }

  addCategory() {
    this.modalComponent.openModal();
  }


  getCategories() {
    this.services.getCategories().subscribe( (resp) => {
      this.categories = resp.data;
    }, (error) => {
      this.notifyService.notify(error.message, 'error');
      console.error(error);
    })
  }

  createCategory() {
    const categoryName = this.createCategoryForm.value.name;    
    if (categoryName && this.createCategoryForm.valid) {
      this.services.postCategory(categoryName).subscribe(
        (resp) => {
          this.getCategories();
          this.modalComponent.closeModal();
          this.notifyService.notify(resp.message, 'success');
        },
        (error) => {
          this.notifyService.notify(error.message, 'error');
          console.error(error);
        }
      );
      this.createCategoryForm.reset();
    } else {
      this.notifyService.notify('Empty fields.', 'error');
    }
  }

  updateCategory() {
    // ToDo
  }

  deleteCategory(id: number) {
    if(id) {
      this.services.deleteCategory(id).subscribe( (resp) => {
        this.getCategories();
        this.notifyService.notify(resp.message, 'success');
      }, (error) => {
        this.notifyService.notify(error.message, 'error');
      })
    } else {
      this.notifyService.notify('ID not found', 'error');
    }
  }

}
