import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/productModel';
import { environment } from 'src/environments/environment';
import { TokenService } from '../authservice/token.service';
import { tap } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  private baseUrl = `${environment.apiBaseUrl}/product`;
  constructor( private http: HttpClient , 
    private tokenService: TokenService 
   ) { }

  getProducts() : Observable<Product[]> {
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.tokenService.getToken(),
    'X-Custom-Header': 'custom-value'
  });
    return this.http.get<Product[]>(this.baseUrl+'/all' , {headers}).pipe(
      tap((res: Product[]) => {
      
        return res;
    }))
     

  }

  getProduct( id: number): Observable<Product> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.tokenService.getToken(),
      'X-Custom-Header': 'custom-value'
    });
    return this.http.get<Product>(this.baseUrl + '/' + id, {headers}).pipe(
      tap((res: Product) => {
      
        return res;
    }))
  }
}
