import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductcardComponent } from './productcard/productcard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProductsComponent } from './products/products.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { FormlyModule } from '@ngx-formly/core';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzNotificationModule } from 'ng-zorro-antd/notification';


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
    ReactiveFormsModule,
    FormsModule, NzRateModule,
    NzToolTipModule ,
    NzNotificationModule , 
    NzAvatarModule, NzCommentModule, NzIconModule, 
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' }, 
      ],
    }),
    FormlyBootstrapModule,

  ],
  exports: [
    ProductcardComponent,
    ProductsComponent , 
    ProductdetailComponent 
  ],
})
export class ProductModule { }
