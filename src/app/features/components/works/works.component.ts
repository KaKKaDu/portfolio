import { Component } from '@angular/core';
import { faHtml5, faCss3, faAngular, faBootstrap } from "@fortawesome/free-brands-svg-icons"
import {Router} from "@angular/router";

@Component({
  selector: 'app-works.modules',
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {
  htmlIcon = faHtml5;
  cssIcon = faCss3;
  bootstrapIcon = faBootstrap;
  angularIcon = faAngular;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.navigate(['works', 'ecologic']);
  }
}
