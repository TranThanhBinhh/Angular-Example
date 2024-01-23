import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotifyService } from '../../services/notify.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent {

  message: string | null = null;
  private subscription: Subscription;

  constructor(private notifyService: NotifyService) {
    this.subscription = this.notifyService.notify$.subscribe((message: string) => {
      this.message = message;
      setTimeout(() => {
        this.message = null;
      }, 3000);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
