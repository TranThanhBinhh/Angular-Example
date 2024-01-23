import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalOpenSubject = new Subject<boolean>();
  modalOpen$ = this.modalOpenSubject.asObservable();

  constructor() { }

  openModal() {
    this.modalOpenSubject.next(true);
  }

  closeModal() {
    this.modalOpenSubject.next(false);
  }

}
