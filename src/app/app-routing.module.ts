import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'order',
    loadChildren: () => import('./design/order/order.module').then(m => m.orderModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];