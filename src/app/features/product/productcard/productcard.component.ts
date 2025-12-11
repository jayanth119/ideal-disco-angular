import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductcardComponent implements OnInit {
  productId: number = 1;
  @Input() title : string = "Essence Mascara Lash Princess";
  @Input() description:string =  "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.";
  @Input() price:number = 50;
  @Input() rating : number = 4.5;
  @Input() brand : string = "Essence";
  @Input() imageUrl : string | null   = "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"; 


  constructor() { }

  ngOnInit(): void {
  }

}
