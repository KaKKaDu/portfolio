import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeedbackComponent} from "../feedback.component";
import {FeedbackRoutingModule} from "./feedback.routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: []
})
export class FeedbackModule {

}
