import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/productModel';
import { NotificationService } from 'src/app/services/notificationservice/notification.service';
import { ProductserviceService } from 'src/app/services/productservice/productservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'], 
})
export class ProductsComponent implements OnInit {
  products : Product[] = [
  ] 
  constructor(  private http: HttpClient, private productservice : ProductserviceService , private router: Router , 
    private notify: NotificationService 
   ) { }

  //  submitProduct() {
  //   this.http.get('https://dummyjson.com/ ').subscribe({
  //     next: (res: any) => {
  //       this.notify.showByStatus(201, res.message);
  //     },
  //     error: (err) => {
  //       this.notify.showByStatus(err.status, err.error?.message);
  //     },
  //   });
  // }

  ngOnInit(): void {
  
    this.products = this.productservice.getProducts();
    console.log(this.products[0]);
    // this.submitProduct()
  
    

  }
    trackByProductId(index: number, item: Product) {
    return item.id ?? index;
  } 

    openProduct(product: Product) {
      console.log(product);
      
    // navigate with state (so detail can use router.getCurrentNavigation().extras.state.product)
    this.router.navigate(['/products', product.id], { state: { product } });
  }

}
