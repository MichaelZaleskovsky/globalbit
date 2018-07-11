import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class IsLoginService implements CanActivate {
  private login: boolean = false;
  private name: string;
  private family: string;
  private email: string;

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.login) return true;
    this.router.navigateByUrl('/register')
    return false;
  }

  setLogin() {
    this.login = true;
  }

  logOut() {
    this.login = false;
  }

  getEmail(): string {
    return this.email;
  }

  getName(): string {
    return this.name;
  }

  getFamily(): string {
    return this.family;
  }

  setUser(name, family, email) {
    this.name = name;
    this.family = family;
    this.email = email;
  }


}
