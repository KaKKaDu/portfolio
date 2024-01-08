import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WorksComponent} from "../works.component";
import {WorksRoutingModule} from "./works.routing.module";
import {WorksCarouselService} from "../works.services/works.carousel.service";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [WorksComponent],
  imports: [
    CommonModule,
    WorksRoutingModule,
    FontAwesomeModule
  ],
  providers: [WorksCarouselService]
})
export class WorksModule {

}
