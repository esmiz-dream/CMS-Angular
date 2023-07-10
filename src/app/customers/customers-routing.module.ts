import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from './add/add.component';
import { ListComponent } from './list/list.component';
import { DetaileComponent } from './detaile/detaile.component';
const routes: Routes = [
  // {
  //   path:'add',
  //   component:AddComponent
  // },
  // {
  //   path:"list",
  //   component:ListComponent
  // },
  // {
  //   path:"detaile",
  //   component:DetaileComponent
  // }
  {
    path:'',
    children:[
      {path:'',component:ListComponent},
      {path:'add',component:AddComponent},
      {path:'detaile',component:DetaileComponent},
      {path:'**',redirectTo:''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
