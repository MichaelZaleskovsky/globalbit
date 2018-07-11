import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {HttpRequestService} from "./http-request.service";
import {IsLoginService} from "./is-login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'This is empty page';

  constructor(private router: Router,
              private request: HttpRequestService,
              private isLogin: IsLoginService) {}

  ngOnInit() {
    if (!this.isLogin.canActivate(null, null)){
      let storedUser = localStorage.getItem('GlobalBitUser');
      if (storedUser != null){
        let user = JSON.parse(storedUser);
        this.request.login(this['email'], user['password']).subscribe(
          res => {
            if (res['error'] == null) {
              this.isLogin.setLogin();
              this.isLogin.setUser(res['user']['profile']['first_name'], res['user']['profile']['second_name'], res['user']['email']);
            }
          }
        )
      }
    }
    this.router.navigateByUrl('/start');
  }
}
