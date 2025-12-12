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

@NgModule({
  declarations: [
    ProductcardComponent,
    ProductsComponent,
    ProductdetailComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    SharedModule  , 

  ],
  exports: [
    ProductcardComponent,
    ProductsComponent , 
    ProductdetailComponent 
  ],
})
export class ProductModule { }
