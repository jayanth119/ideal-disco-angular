import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { AddFormConfigBuilder } from 'src/app/constants/addproductConfig';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss'],
})
export class AddproductComponent implements OnInit {
  form = new FormGroup({});
  model: any;
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];

  // product JSON trimmed down to core product information only
  productExample = {
    id: 1,
    title: 'Essence Mascara Lash Princess',
    description:
      'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
    category: 'beauty',
    price: 9.99,
    discountPercentage: 10.48,
    rating: 2.56,
    stock: 99,
    tags: ['beauty', 'mascara'],
    brand: 'Essence',
    sku: 'BEA-ESS-ESS-001',
    weight: 4,
    dimensions: { width: 15.14, height: 13.08, depth: 22.99 },
    availabilityStatus: 'In Stock',
    minimumOrderQuantity: 48,
  };

  constructor() {}

  ngOnInit(): void {
    // model starts with the trimmed product
    this.model = JSON.parse(JSON.stringify(this.productExample));
    // build fields only for core product info
    this.fields = AddFormConfigBuilder(this.productExample);
  }

  onSubmit(model: any) {
    if (this.form.valid) {
      console.log('Submitted model:', model);
      alert('Submitted! Check console for the product model.');
    } else {
      alert('Form invalid — please complete required fields.');
    }
  }
}
