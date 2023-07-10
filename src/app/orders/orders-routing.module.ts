import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'',component:OrdersComponent},
      {path:'add',component:AddComponent},
      {path:'**',redirectTo:''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
