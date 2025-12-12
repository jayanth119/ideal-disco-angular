import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductcardComponent } from './productcard/productcard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormlyModule } from '@ngx-formly/core';
@NgModule({
  declarations: [
    ProductcardComponent,
    ProductsComponent,
    ProductdetailComponent,
    ReviewsComponent,
    AddproductComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    SharedModule  , 
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' }, 
      ],
    }),
    FormlyBootstrapModule

  ],
  exports: [
    ProductcardComponent,
    ProductsComponent , 
    ProductdetailComponent 
  ],
})
export class ProductModule { }
