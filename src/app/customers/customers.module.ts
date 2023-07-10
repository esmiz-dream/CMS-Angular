import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';

import { CustomersRoutingModule } from './customers-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetaileComponent } from './detaile/detaile.component';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    DetaileComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FontAwesomeModule,
    FormsModule
    
  ]
})
export class CustomersModule { }
