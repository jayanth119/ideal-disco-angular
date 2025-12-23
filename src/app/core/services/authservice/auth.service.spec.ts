import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';
import { User, AuthResponse } from 'src/app/models/userModel';

fdescribe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  let tokenServiceSpy: jasmine.SpyObj<TokenService>;

  const mockUser: User = {
    email: 'test@example.com',
    password: 'password123',
  } as User;

  const mockResponse: AuthResponse = {
    token: 'mock-jwt-token',
    user: mockUser,
    message: undefined,
    status: function (status: any, message: any): unknown {
      throw new Error('Function not implemented.');
    }
  };

  beforeEach(() => {
    tokenServiceSpy = jasmine.createSpyObj('TokenService', [
      'setToken',
      'removeToken',
      'isLoggedIn',
    ]);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        { provide: TokenService, useValue: tokenServiceSpy },
      ],
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // ✅ ensures no pending HTTP calls
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // ==========================
  // REGISTER
  // ==========================
  it('should register user and save token', () => {
    service.register(mockUser).subscribe((res) => {
      expect(res.token).toBe(mockResponse.token);
    });

    const req = httpMock.expectOne(
      `${environment.apiBaseUrl}/auth/register`
    );
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockUser);

    req.flush(mockResponse);

    expect(tokenServiceSpy.removeToken).toHaveBeenCalled();
    expect(tokenServiceSpy.setToken).toHaveBeenCalledWith(
      mockResponse.token
    );
  });

  // ==========================
  // LOGIN
  // ==========================
  it('should login user and store token', () => {
    service.login(mockUser).subscribe((res) => {
      expect(res.token).toBe(mockResponse.token);
    });

    const req = httpMock.expectOne(
      `${environment.apiBaseUrl}/auth/login`
    );
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockUser);

    req.flush(mockResponse);

    expect(tokenServiceSpy.removeToken).toHaveBeenCalled();
    expect(tokenServiceSpy.setToken).toHaveBeenCalledWith(
      mockResponse.token
    );
  });

  // ==========================
  // FORGOT PASSWORD
  // ==========================
  it('should call forgot password API and save token', () => {
    service.forgotpassword(mockUser).subscribe((res) => {
      expect(res.token).toBe(mockResponse.token);
    });

    const req = httpMock.expectOne(
      `${environment.apiBaseUrl}/auth/forgot-pswd`
    );
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockUser);

    req.flush(mockResponse);

    expect(tokenServiceSpy.removeToken).toHaveBeenCalled();
    expect(tokenServiceSpy.setToken).toHaveBeenCalledWith(
      mockResponse.token
    );
  });

  // ==========================
  // LOGOUT
  // ==========================
  it('should remove token on logout', () => {
    service.logout();
    expect(tokenServiceSpy.removeToken).toHaveBeenCalled();
  });

  // ==========================
  // AUTH CHECK
  // ==========================
  it('should return true if user is authenticated', () => {
    tokenServiceSpy.isLoggedIn.and.returnValue(true);

    const result = service.isAuthenticated();

    expect(result).toBeTrue();
    expect(tokenServiceSpy.isLoggedIn).toHaveBeenCalled();
  });

  it('should return false if user is not authenticated', () => {
    tokenServiceSpy.isLoggedIn.and.returnValue(false);

    const result = service.isAuthenticated();

    expect(result).toBeFalse();
  });
});
