import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';
import { AuthResponse, User } from 'src/app/models/userModel';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private baseUrl = `${environment.apiBaseUrl}/auth`;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  register(user : User ){

    return this.http.post<any>(`${this.baseUrl}/register`, user).pipe(
      tap((res: { token: string; }) => {
        this.tokenService.removeToken();
        this.tokenService.setToken(res.token);
      })
    );

  }
  forgotpassword(user: User) {
    return this.http.post<any>(`${this.baseUrl}/forgot-pswd`, user).pipe(
      tap((res: { token: string; }) => {
         this.tokenService.removeToken();
        this.tokenService.setToken(res.token);
      })
    );
  }
login(user: User): Observable<AuthResponse> {
  console.log(123);

  return this.http
    .post<AuthResponse>(`${this.baseUrl}/login`, user)
    .pipe(
      tap((res: AuthResponse) => {
         this.tokenService.removeToken(); 
        this.tokenService.setToken(res.token);
        console.log('Login success, token saved');
      })
    );
}
 



  logout(): void {
    this.tokenService.removeToken();
  }

  isAuthenticated(): boolean {
    return this.tokenService.isLoggedIn();
  }
}
