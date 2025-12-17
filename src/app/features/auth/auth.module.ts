import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectOption, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }      from '@angular/material/input';
import { MatSelectModule }     from '@angular/material/select';
import { MatButtonModule }     from '@angular/material/button';
import { MatIconModule }       from '@angular/material/icon';
import { MatCardModule }       from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
@NgModule({
  declarations: [RegisterComponent, LoginComponent, ForgotpasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule ,
    NzSelectModule 
  ],
  exports: [
    RegisterComponent,
    LoginComponent ,
    ForgotpasswordComponent
  ]
})
export class AuthModule {}
