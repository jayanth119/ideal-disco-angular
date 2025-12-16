import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notificationservice/notification.service';
import { ProductserviceService } from 'src/app/core/services/productservice/productservice.service';
import { Product } from 'src/app/models/productModel';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss'],
})
export class ProductdetailComponent implements OnInit {
  @Input() product: Product | any;
  selectedImage?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productservice: ProductserviceService,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    const productId: number = this.activatedRoute.snapshot.params['id'];
    this.productservice.getProduct(productId).subscribe({
      next: (res: any) => {
        this.product = res;
        console.log(this.product);
         this.selectedImage = this.product.images?.[0] || this.product.thumbnail || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5IKXwqPvjNJW0hISdv8H3N7XB-yvIrx6KZg&s'; 
        this.notify.success(res.message);
      },
      error: (err) => {
        this.notify.showByStatus(err.status, err.error?.message);
      },

    })
   
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
