import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userData: any;
  constructor(
    private builder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private auth: AuthService
  ) {
    if(sessionStorage.getItem('user')!=null){
      this.router.navigate(['customers']);
    }
  }


  loginForm = this.builder.group({
    username: this.builder.control(
      '',
      Validators.compose([Validators.required])
    ),
    password: this.builder.control(
      '',
      Validators.compose([Validators.required])
    ),
  });

  proceedLogin() {
    if (this.loginForm.valid) {
      this.auth.getByCode(this.loginForm.value.username).subscribe((result) => {
        this.userData = result;
        console.warn(this.userData[0].username);
        if(this.userData[0].password===this.loginForm.value.password){
          sessionStorage.setItem('user',this.userData[0].id);
          sessionStorage.setItem('role',this.userData[0].role);
          this.toastr.success('wellcom '+this.loginForm.value.username)
          this.router.navigate(['customers']);
        }
        else{
          this.toastr.error('Incorrect username or password');
        }
      });
    }
  }
}
