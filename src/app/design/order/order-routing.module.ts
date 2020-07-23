import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { orderComponent } from './order.component'


const routes: Routes = [
  {
    path: '',
    component: orderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class orderRoutingModule { }