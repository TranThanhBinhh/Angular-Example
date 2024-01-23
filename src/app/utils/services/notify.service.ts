import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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
