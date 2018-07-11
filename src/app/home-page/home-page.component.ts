import { Component, OnInit } from '@angular/core';
import {IsLoginService} from "../is-login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  email: string;
  name: string;
  family: string;

  constructor(private isLogin: IsLoginService,
              private router: Router) { }

  ngOnInit() {
    this.email = this.isLogin.getEmail();
    this.name = this.isLogin.getName();
    this.family = this.isLogin.getFamily();
  }

  logOut(){
    localStorage.removeItem('GlobalBitUser');
    this.isLogin.logOut();
    this.router.navigateByUrl("/register");
  }

}
