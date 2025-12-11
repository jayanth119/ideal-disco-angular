import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/productModel';
import { ProductserviceService } from 'src/app/services/productservice/productservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products : Product[] = [
  ] 
  constructor( private productservice : ProductserviceService) { }

  ngOnInit(): void {
  
    this.products = this.productservice.getProducts();
    console.log(this.products[0]);
    

  }
    trackByProductId(index: number, item: Product) {
    return item.id ?? index;
  } 

}
