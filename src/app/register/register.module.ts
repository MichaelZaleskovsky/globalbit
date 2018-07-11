import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import {RegisterRoutingModule} from "./register-routing";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule
  ],
  declarations: [
    AuthComponent
  ]
})
export class RegisterModule { }
