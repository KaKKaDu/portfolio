import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeatureRoutingModule} from "./feature.routing.module";
import {HomeModule} from "../components/home/home.modules/home.module";
import {BiograthyModule} from "../components/biography/biograthy.modules/biograthy.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    HomeModule,
    BiograthyModule
  ],
  exports: [HomeModule, BiograthyModule]
})
export class FeatureModule {

}
