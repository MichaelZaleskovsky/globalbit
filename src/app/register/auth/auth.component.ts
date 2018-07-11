import { Component, OnInit } from '@angular/core';
import {HttpRequestService} from "../../http-request.service";
import {IsLoginService} from "../../is-login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  keepMarker = false;
  user = {
    password: "",
    email: ""
  };
  wrongPassword: boolean = false;
  serverError: boolean = false;

  constructor(private request: HttpRequestService,
              private isLogin: IsLoginService,
              private router: Router) {}

  toggleKeep() {
    console.log("TOGGLE WORK");
    this.keepMarker = !this.keepMarker;
  }

  ngOnInit() {

  }

  onSignIn() {
    console.log("pass = " + this.user.password+"  email = " + this.user.email);

    this.request.login(this.user.email, this.user.password).subscribe(
      res => {
        console.log("REQUEST RESULT");
        console.log(res);
        if (res['error'] == null) {
          this.isLogin.setLogin();
          this.isLogin.setUser(res['user']['profile']['first_name'], res['user']['profile']['second_name'], res['user']['email']);
          if (this.keepMarker) {this.storeLocal()}
          this.router.navigateByUrl('/start')
        } else {
          this.wrongPassword = true;
        }
      },
      err => {
        this.serverError = true;
      }
    )
  }

  storeLocal() {
    localStorage.setItem('GlobalBitUser', JSON.stringify(this.user));
  }

  forgetPassword() {
    this.isLogin.setUser('', '', this.user.email);
    this.router.navigateByUrl('/forget');
  }

}
