import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {

  constructor(private router: Router) { }

  isCollapsed: boolean = false;
  @Output() emitCollpase = new EventEmitter<boolean>();

  collpase() {
    this.isCollapsed = !this.isCollapsed
    this.emitCollpase.emit(this.isCollapsed);
  }

  signout() {
    this.router.navigate(['/']);
  }

}
