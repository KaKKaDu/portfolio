import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WorksCarouselService} from "../../works.services/works.carousel.service";
import {carouselSlide} from "../../works.models/carousel-slide.model";
import { faArrowRight, faArrowLeft } from"@fortawesome/free-solid-svg-icons"
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-work-ecologic',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './work-ecologic.component.html',
  styleUrls: ['./work-ecologic.component.css', '../work-children.shared/css.shared.css']
})
export class WorkEcologicComponent {
  arrowRightIcon = faArrowRight;
  arrowLeftIcon = faArrowLeft;
  carouselSlide: carouselSlide;

  ngOnInit() {
    this.carouselSlide = this.workCarServ.getTheSlide("ecologic");
  }

  constructor(private workCarServ: WorksCarouselService) {};

  changeSlide(isForward:boolean) {
    this.carouselSlide = this.workCarServ.moveToSlide('ecologic', isForward);
  }
}
