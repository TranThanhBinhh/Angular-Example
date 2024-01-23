import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor() { }

  private notifySubject = new Subject<string>();

  notify$ = this.notifySubject.asObservable();

  notify(message: string) {
    this.notifySubject.next(message);
  }
}
