import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ]
})
export class AuthModule { }