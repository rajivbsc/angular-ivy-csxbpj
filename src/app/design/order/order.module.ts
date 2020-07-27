import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { orderRoutingModule } from './order-routing.module'
import { orderComponent } from './order.component'

@NgModule({
  imports: [
    CommonModule,
    orderRoutingModule
  ],
  declarations: [orderComponent]
})
export class orderModule{}