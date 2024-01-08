import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {WorksCarouselService} from "../../works.services/works.carousel.service";
import {carouselSlide} from "../../works.models/carousel-slide.model";

@Component({
  selector: 'app-work-read',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './work-read.component.html',
  styleUrls: ['./work-read.component.css', '../work-children.shared/css.shared.css']
})
export class WorkReadComponent {
  arrowRightIcon = faArrowRight;
  arrowLeftIcon = faArrowLeft;
  carouselSlide: carouselSlide;

  ngOnInit() {
    this.carouselSlide = this.workCarServ.getTheSlide("readapp");
  }

  constructor(private workCarServ: WorksCarouselService) {};

  changeSlide(isForward:boolean) {
    this.carouselSlide = this.workCarServ.moveToSlide('readapp', isForward);
    console.log(this.carouselSlide);
  }
}
