import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductcardComponent } from './productcard/productcard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    ProductcardComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,

  ],
  exports: [
    ProductcardComponent,
    ProductsComponent
  ],
})
export class ProductModule { }
