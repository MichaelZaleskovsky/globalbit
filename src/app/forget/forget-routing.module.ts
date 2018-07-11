import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RestorePswComponent} from "./restore-psw/restore-psw.component";


const routes: Routes = [
  {
    path: '',
    component: RestorePswComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgetRoutingModule { }
