import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailComponent } from './productdetail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NotificationService } from 'src/app/core/services/notificationservice/notification.service';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

describe('ProductdetailComponent', () => {
  let component: ProductdetailComponent;
  let fixture: ComponentFixture<ProductdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [RouterTestingModule , HttpClientTestingModule , NzNotificationModule ],
        providers : [NotificationService] ,
      declarations: [ ProductdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailComponent);
    component = fixture.componentInstance;
    component.product = {
        id: 1,
        title: 'Test Product',
        price: 100,
        images: [],
        reviews: []
      };

     
      component.product.reviews.push({
        reviewerName: 'John Doe',
        rating: 5,
        comment: 'Excellent product',
      });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
