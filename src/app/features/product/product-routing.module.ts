import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';



const routes: Routes = [
  {
    path: 'product',
    component: ProductsComponent 
  } ,
   { path: "**", redirectTo: "login" }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
