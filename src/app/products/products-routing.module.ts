import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from './add/add.component';
import {ListComponent} from './list/list.component';
import {DetaileComponent} from './detaile/detaile.component';

const routes: Routes = [
  {
    path:'',
    children:[
     { path:'', component:ListComponent},
     {path:'add',component:AddComponent},
     {path:'detaile',component:DetaileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
