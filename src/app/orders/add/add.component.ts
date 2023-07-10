import { Component } from '@angular/core';
import { CustomersDataService } from '../../services/customers-data.service';
import { ProductsDataService } from '../../services/products-data.service';
import { OrdersDataService } from '../../services/orders-data.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  faUser = faUser;
  selectedCust: any;
  selectedPro: any;
  customers: any;
  products: any;
  ranCode = Math.random() * 10000;
  constructor(
    private cusData: CustomersDataService,
    private proData: ProductsDataService,
    private orderData: OrdersDataService,
    private toastr: ToastrService,
    private router:Router
  ) {
    this.cusData.customers().subscribe((cusResult) => {
      this.customers = cusResult;
    });

    this.proData.getProduct().subscribe((proResult) => {
      this.products = proResult;
    });
  }

  showSuccess(title: string, msg: string) {
    this.toastr.success(msg, title);
  }

  onSubmit(data: any, form: NgForm) {
    this.orderData.saveOrder(data).subscribe((result) => {
      console.warn(result);
      this.showSuccess(
        'order success',
        'you product will arive soon!! good day'
      );
      form.reset();
      this.router.navigate(['orders']);
    });
  }
}
