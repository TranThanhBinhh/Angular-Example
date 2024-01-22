import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  widthAside: string = '250px';
  widthBody: string = 'calc(100vw - 250px)';

  handleCollapse(collapse: boolean) {
    if(!collapse) {
      this.widthAside = '250px';
      this.widthBody = 'calc(100vw - 250px)';
    } else {
      this.widthAside = '75px';
      this.widthBody = 'calc(100vw - 75px)';
    }
  }
  
}
