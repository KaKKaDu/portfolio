import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BiographyComponent} from "../biography.component";
import {BiograthyRoutingModule} from "./biograthy.routing.module";

@NgModule({
  declarations: [BiographyComponent],
  imports: [
    CommonModule,
    BiograthyRoutingModule
  ]
})
export class BiograthyModule {

}
