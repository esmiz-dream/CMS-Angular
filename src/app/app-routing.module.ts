import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {
    path:"customers",
    canActivate:[AuthGuard],
    loadChildren:()=>import('./customers/customers.module').then(mod=>mod.CustomersModule),
  },
  {
    path:"orders",
    canActivate:[AuthGuard],
    loadChildren:()=>import('./orders/orders.module').then(m=>m.OrdersModule)
  },
  {
    path:"products",
    canActivate:[AuthGuard],
    loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule)
  },
  {
    path:"",
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:"users",
    loadChildren:()=>import('./users/users.module').then(m=>m.UsersModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
