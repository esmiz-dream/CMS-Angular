import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements DoCheck,OnInit {
  faCoffee = faCoffee;
  isMenuRequired: boolean = false;

  constructor(private router: Router) {}
  ngOnInit(): void {
     
  }
  ngDoCheck(): void {
    if (sessionStorage.getItem('user') !== null) {
      this.isMenuRequired = true;
    }
  }

  logout() {
    sessionStorage.clear();
    this.ngOnInit();
    this.router.navigate(['']);
  }
}
