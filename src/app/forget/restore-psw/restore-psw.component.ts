import { Component, OnInit } from '@angular/core';
import {IsLoginService} from "../../is-login.service";
import {Router} from "@angular/router";
import {HttpRequestService} from "../../http-request.service";

@Component({
  selector: 'app-restore-psw',
  templateUrl: './restore-psw.component.html',
  styleUrls: ['./restore-psw.component.css']
})
export class RestorePswComponent implements OnInit {
  email: string;
  emptyEmail: boolean = false;
  sendingMsg: boolean = false;

  constructor(private isLogin: IsLoginService,
              private router: Router,
              private request: HttpRequestService)
  { }

  ngOnInit() {
    this.email = this.isLogin.getEmail();
  }

  sendRestore() {
    this.sendingMsg = true;
    this.emptyEmail = false;
    if (this.email != ''){
      this.request.restore(this.email).subscribe(
        res => {this.router.navigateByUrl('/register')},
        err => {this.router.navigateByUrl('/register')}
      )
    } else {
      this.sendingMsg = false;
      this.emptyEmail = true;
    }
  }

}
