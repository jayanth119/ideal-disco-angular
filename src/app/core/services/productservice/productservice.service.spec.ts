import { TestBed } from '@angular/core/testing';
import { ProductserviceService } from './productservice.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ProductserviceService', () => {
  let service: ProductserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
            imports: [RouterTestingModule , HttpClientTestingModule],
            providers: [  ProductserviceService  ] 
    });
    service = TestBed.inject(ProductserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
