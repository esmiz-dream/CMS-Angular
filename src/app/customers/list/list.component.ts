import { Component } from '@angular/core';
import { CustomersDataService } from '../../services/customers-data.service';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import {
  faPlus,
  faList,
  faMap,
  faTrash,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  faEdit = faEdit;
  faPlus = faPlus;
  faList = faList;
  faMap = faMap;
  faTrash = faTrash;
  faUser = faUser;
  view: string = 'card';
  isEdit = false;
  editableId: any;
  customers: any;

  constructor(private customerData: CustomersDataService) {
    this.customerData.customers().subscribe((data) => {
      this.customers = data;
    });
  }

  viewType(type: string) {
    this.view = type;
  }

  onEdit(id: any) {
    this.isEdit = true;
    this.editableId = id;
  }

  onUpdate(id: any) {
  }

  onUpdateCus(data:any){
    console.warn(data);
  }
}
