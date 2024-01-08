import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BiograthyModule} from "../components/biography/biograthy.modules/biograthy.module";
import {WorksModule} from "../components/works/works.modules/works.module";
import {FeedbackModule} from "../components/feedback/feedback.modules/feedback.module";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../components/home/home.modules/home.module').then(m => m.HomeModule)
  },
  {
    path: 'bio',
    loadChildren: () => import('../components/biography/biograthy.modules/biograthy.module').then(m => BiograthyModule)
  },
  {
    path: 'works',
    loadChildren: () => import('../components/works/works.modules/works.module').then(m => WorksModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('../components/feedback/feedback.modules/feedback.module').then(m => FeedbackModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FeatureRoutingModule {

}
