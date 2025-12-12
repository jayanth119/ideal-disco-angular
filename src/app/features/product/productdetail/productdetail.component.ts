import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/productModel';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss'],
})
export class ProductdetailComponent implements OnInit {
  @Input() product: Product | any;
  selectedImage?: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
   
    if (!this.product || Object.keys(this.product).length === 0) {
     
      const navStateProduct = (this.router.getCurrentNavigation && this.router.getCurrentNavigation()?.extras?.state?.['product'])
        || (history && (history.state as any)?.product);

      if (navStateProduct) {
        this.product = navStateProduct as Product;
      }
    }

    if (!this.product || Object.keys(this.product).length === 0) {
      console.error('Product not found in @Input or navigation state.');
    
      this.product = undefined;
      return;
    }

    this.selectedImage = this.product.images?.[0] || this.product.thumbnail || '';
  }

  get discountedPrice(): number {
    const p = this.product?.price ?? 0;
    const d = this.product?.discountPercentage ?? 0;
    return +(p - (p * d) / 100).toFixed(2);
  }

  selectImage(url: string) {
    this.selectedImage = url;
  }
}
