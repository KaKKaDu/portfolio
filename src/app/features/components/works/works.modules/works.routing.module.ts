import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {WorksComponent} from "../works.component";

const routes: Routes = [
  {
    path: '',
    component: WorksComponent,
    children: [
      {
        path: 'ecologic',
        loadComponent: () => import('../work-children/work-ecologic/work-ecologic.component').then((c) => c.WorkEcologicComponent)
      },
      {
        path: 'readapp',
        loadComponent: () => import('../work-children/work-read/work-read.component').then((c) => c.WorkReadComponent)
      },
      {
        path: 'recipe',
        loadComponent: () => import('../work-children/work-recipe/work-recipe.component').then((c) => c.WorkRecipeComponent)
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WorksRoutingModule {

}
