import { Component } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import {
  faPlus,
  faList,
  faMap,
  faTrash,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { OrdersDataService } from '../../services/orders-data.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: [
    './orders.component.css',
    '../../customers/list/list.component.css',
  ],
})
export class OrdersComponent {
  faEdit = faEdit;
  faPlus = faPlus;
  faList = faList;
  faMap = faMap;
  faTrash = faTrash;
  faUser = faUser;
  view: string = 'card';
  isEdit = false;
  editableId: any;
  orders: any;
  cusOrder: any;

  constructor(private orderData: OrdersDataService) {
    this.getcustomer(1);
    this.orderData.getOrders().subscribe((data) => {
      this.orders = data;
    });
  }

  viewType(type: string) {
    this.view = type;
  }

  onEdit(id: any) {
    this.isEdit = true;
    this.editableId = id;
  }

  onUpdate(id: any) {}

  onUpdateCus(data: any) {
    console.warn(data);
  }
  getcustomer(id: any) {
    this.cusOrder = this.orderData
      .getCustomerOfOrder('1')
      .subscribe((result) => {
        this.cusOrder = result;
        console.warn('cusorder='+result);
      });
  }
}
