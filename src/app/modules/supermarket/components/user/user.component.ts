import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/utils/components/modal/modal.component';
import { Product } from '../../interfaces/product';
import { User } from '../../interfaces/user';
import { NotifyService } from 'src/app/utils/services/notify.service';
import { ProductsService } from '../../services/products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'] 
})
export class UsersComponent implements OnInit {

  createUserForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
  });
  users: Array<User> = [];
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  constructor(
    private notifyService: NotifyService,
    private userServices: UserService,
  ) { }
  
  ngOnInit() {
    this.getUsers();
  }

  addProduct() {
    this.modalComponent.openModal();
  }

  getUsers() {
    this.userServices.getUsers().subscribe( (resp) => {
      console.log(this.users)
      this.users = resp.data;
    }, (error) => {
      this.notifyService.notify(error.message, 'error');
      console.error(error);
    })
  }

  createProduct() {
    // const { user, isUser } = this.validateForm(this.createProductForm.value);
    // if(isUser) {
    //   this.services.postProduct(user).subscribe(
    //     (resp) => {
    //       // this.getProducts();
    //       this.modalComponent.closeModal();
    //       this.notifyService.notify(resp.message, 'success');
    //     },
    //     (error) => {
    //       this.notifyService.notify(error.message, 'error');
    //       console.error(error);
    //     }
    //   );
    // } else {
    //   this.notifyService.notify('Empty fields.', 'error');
    // }
  }

  updateProduct(id: number | undefined) {
    
  }
  
  deleteProduct(id: number | undefined) {
    // if(id) {
    //   this.services.deleteProduct(id).subscribe( (resp) => {
    //     this.getProducts();
    //     this.notifyService.notify(resp.message, 'success');
    //   }, (error) => {
    //     this.notifyService.notify(error.message, 'error');
    //     console.error(error);
    //   })
    // } else {
    //   this.notifyService.notify('ID not found.', 'error');
    // }
  }

  // validateForm(user: any) {
  //   const firstname = this.createUserForm.value.firstname;
  //   const lastname = this.createUserForm.value.lastname;
  //   const email = this.createUserForm.value.email;
  //   const role = this.createUserForm.value.role;
  
  //   if (
  //     firstname !== undefined &&
  //     lastname !== undefined &&
  //     email !== undefined &&
  //     role !== undefined &&
  //   ) {
  //     const user: User = {
  //       firstname: firstname as string,
  //       lastname: lastname as string,
  //       email: email as string,
  //       role: role as string,
  //     };
  //     return { user: user, isUser: true }
  //   } else {
  //     return { user: {firstname: '', lastname: '', email: '', role: ''}, isUser: false }
  //   }
  // }

}
