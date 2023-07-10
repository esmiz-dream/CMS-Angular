import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { AddComponent } from './add/add.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [OrdersComponent, AddComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    FontAwesomeModule,
    NgSelectModule,
  ],
})
export class OrdersModule {}
