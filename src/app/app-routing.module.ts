import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {IsLoginService} from "./is-login.service";

const routes: Routes = [
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  },
  {
    path: 'forget',
    loadChildren: './forget/forget.module#ForgetModule'
  },
  {
    path: 'start',
    component: HomePageComponent,
    canActivate: [IsLoginService]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
