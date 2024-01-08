import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {WorksCarouselService} from "../../works.services/works.carousel.service";
import {carouselSlide} from "../../works.models/carousel-slide.model";

@Component({
  selector: 'app-work-recipe',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './work-recipe.component.html',
  styleUrls: ['./work-recipe.component.css', '../work-children.shared/css.shared.css']
})
export class WorkRecipeComponent {
  arrowRightIcon = faArrowRight;
  arrowLeftIcon = faArrowLeft;
  carouselSlide: carouselSlide;

  ngOnInit() {
    this.carouselSlide = this.workCarServ.getTheSlide("recipe");
  }

  constructor(private workCarServ: WorksCarouselService) {};

  changeSlide(isForward:boolean) {
    this.carouselSlide = this.workCarServ.moveToSlide('recipe', isForward);
    console.log(this.carouselSlide);
  }
}
