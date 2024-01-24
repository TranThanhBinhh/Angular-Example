import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor() { }

  private notifySubject = new Subject<{ message: string, styleClass: string }>();

  notify$ = this.notifySubject.asObservable();

  notify(message: string, styleClass: string) {
    this.notifySubject.next({ message, styleClass });
  }
}
