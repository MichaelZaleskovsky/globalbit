import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForgetRoutingModule} from "./forget-routing.module";
import {RestorePswComponent} from "./restore-psw/restore-psw.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ForgetRoutingModule,
    FormsModule
  ],
  declarations: [
    RestorePswComponent
  ]
})
export class ForgetModule { }
