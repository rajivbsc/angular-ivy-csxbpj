import { NgModule } from '@angular/core';
import { Routes,RouterModule,PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'order',
    loadChildren: './design/order/order.module#orderModule'//() => import('./design/order/order.module').then(m => m.orderModule)
  }
  ,
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})

export class appRoutingModule { }