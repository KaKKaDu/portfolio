import { Component } from '@angular/core';

@Component({
  selector: 'app-home.modules',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isNerdImg: boolean = true;

  onPortEnter() {
    this.isNerdImg = false;
  }

  onPortLeave() {
      this.isNerdImg = true;
  }
}
