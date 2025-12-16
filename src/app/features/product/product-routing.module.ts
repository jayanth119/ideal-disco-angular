import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';



const routes: Routes = [
  {
    path: '',
    component: ProductsComponent ,  canActivate: [AuthGuard] 
  } ,
  {
    path: 'addproduct',
    component: AddproductComponent , canActivate: [AuthGuard] 
  },
  { path: 'products/:id', component: ProductdetailComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
