import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { ForgotpasswordComponent } from './features/auth/forgotpassword/forgotpassword.component';

export  const routes: Routes = [

  { path : "login" , component: LoginComponent },
  { path : "register" , component: RegisterComponent },
  {path : 'forgot' , component: ForgotpasswordComponent},
  {path : '' , loadChildren: () => import('./features/files/files.module').then(m => m.FilesModule) },
  {path : '' , loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule) },
  { path: "**", redirectTo: "login" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
