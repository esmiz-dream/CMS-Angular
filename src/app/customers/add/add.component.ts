import { Component } from '@angular/core';
import { CustomersDataService } from '../../services/customers-data.service';
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

  constructor(
    private customerDdata: CustomersDataService,
    private toastr: ToastrService,
    private router:Router
  ) {}
  addCustomer(data: any, addform: NgForm) {
    if (addform.valid) {
      this.customerDdata.saveCustomer(data).subscribe((result) => {
        console.warn(result);
        addform.reset();
        this.showSuccess(
          'Registered Successful',
          'know the customer can order product!!'
        );
        this.router.navigate(['list']);
      });
    }
  }

  showSuccess(title: string, msg: string) {
    this.toastr.success(msg, title);
  }
}
