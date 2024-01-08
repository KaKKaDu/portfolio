import {carouselSlide} from '../works.models/carousel-slide.model'
import {carouselName} from "../works.models/carousel-name.model";

export class WorksCarouselService {
  ecologicSlide: carouselSlide = 1;
  recipeBookSlide: carouselSlide = 1;
  readAppSlide: carouselSlide = 1;

  getTheSlide(carouselName: carouselName):carouselSlide {
    switch (carouselName) {
      case "ecologic": {
        return this.ecologicSlide;
      }
      case "recipe": {
        return this.recipeBookSlide;
      }
      case "readapp": {
        return this.readAppSlide;
      }
    }
  }

  moveToSlide(carouselName: carouselName, isForward: boolean): carouselSlide {
    switch (carouselName) {
      case "ecologic": {
        this.ecologicSlide = this.changePosition(this.ecologicSlide, isForward);
        return this.ecologicSlide;
      }
      case "recipe" : {
        this.recipeBookSlide = this.changePosition(this.recipeBookSlide, isForward);
        return this.recipeBookSlide;
      }
      case "readapp" : {
        this.readAppSlide = this.changePosition(this.readAppSlide, isForward);;
        return this.readAppSlide;
      }
    }

  }

  changePosition(neededCarouselSlide: carouselSlide, isForward: boolean):carouselSlide {
    if (isForward) {
      switch (neededCarouselSlide) {
        case 1: {
          neededCarouselSlide = 2;
          break;
        }
        case 2: {
          neededCarouselSlide = 3;
          break;
        }
        case 3: {
          neededCarouselSlide = 1;
          break;
        }
      }
    } else {
      switch (neededCarouselSlide) {
        case 1: {
          neededCarouselSlide = 3;
          break;
        }
        case 2: {
          neededCarouselSlide = 1;
          break;
        }
        case 3: {
          neededCarouselSlide = 2;
          break;
        }
      }
    }
    return neededCarouselSlide;
  }
}
