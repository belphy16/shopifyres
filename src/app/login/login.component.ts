import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'All Mart';
  
  private username: string = '' ;
  private password: string = '' ;

  constructor(private router: Router) { }

  onClick() {
    this.router.navigate(["./products"]);
  }

}
