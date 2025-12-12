import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';



const routes: Routes = [
  {
    path: 'product',
    component: ProductsComponent 
  } ,
  { path: 'products/:id', component: ProductdetailComponent },
   { path: "**", redirectTo: "login" },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
