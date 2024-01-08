import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BiographyComponent} from "../biography.component";

const routes: Routes = [
  {
    path: '',
    component: BiographyComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BiograthyRoutingModule {

}
