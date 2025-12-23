import { TestBed } from '@angular/core/testing';
import { NotificationService } from './notification.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

fdescribe('NotificationService', () => {
  let service: NotificationService;
  let nzNotificationSpy: jasmine.SpyObj<NzNotificationService>;

  beforeEach(() => {
    nzNotificationSpy = jasmine.createSpyObj('NzNotificationService', [
      'success',
      'warning',
      'info',
      'error',
    ]);

    TestBed.configureTestingModule({
      providers: [
        NotificationService,
        { provide: NzNotificationService, useValue: nzNotificationSpy },
      ],
    });

    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // 🔹 1xx – Informational
  it('should show info for 1xx status', () => {
    service.showByStatus(100);
    expect(nzNotificationSpy.info).toHaveBeenCalledWith(
      'Info',
      'Request received, processing'
    );
  });

  // 🟢 2xx – Success
  it('should show success for 2xx status', () => {
    service.showByStatus(200);
    expect(nzNotificationSpy.success).toHaveBeenCalledWith(
      'Success',
      'Operation completed successfully'
    );
  });

  // 🟡 3xx – Redirection
  it('should show info for 3xx status', () => {
    service.showByStatus(302);
    expect(nzNotificationSpy.info).toHaveBeenCalledWith(
      'Info',
      'Request redirected'
    );
  });

  // 🔴 401 / 403 – Unauthorized
  it('should show error for 401 status', () => {
    service.showByStatus(401);
    expect(nzNotificationSpy.error).toHaveBeenCalledWith(
      'Error',
      'Unauthorized access'
    );
  });

  it('should show error for 403 status', () => {
    service.showByStatus(403);
    expect(nzNotificationSpy.error).toHaveBeenCalledWith(
      'Error',
      'Unauthorized access'
    );
  });

  // 🔴 404 – Not Found
  it('should show info for 404 status', () => {
    service.showByStatus(404);
    expect(nzNotificationSpy.info).toHaveBeenCalledWith(
      'Info',
      'Resource not found'
    );
  });

  // 🔴 429 – Too Many Requests
  it('should show warning for 429 status', () => {
    service.showByStatus(429);
    expect(nzNotificationSpy.warning).toHaveBeenCalledWith(
      'Warning',
      'Too many requests. Try again later'
    );
  });

  // 🔴 Other 4xx – Client Error
  it('should show warning for generic 4xx status', () => {
    service.showByStatus(400);
    expect(nzNotificationSpy.warning).toHaveBeenCalledWith(
      'Warning',
      'Client error occurred'
    );
  });

  // 🔥 5xx – Server Error
  it('should show error for 5xx status', () => {
    service.showByStatus(500);
    expect(nzNotificationSpy.error).toHaveBeenCalledWith(
      'Error',
      'Server error. Please try again later'
    );
  });

  // ⚠️ Unknown Status
  it('should show error for invalid status', () => {
    service.showByStatus(700);
    expect(nzNotificationSpy.error).toHaveBeenCalledWith(
      'Error',
      'Unexpected error (status: 700)'
    );
  });

  // ✅ Custom message override
  it('should use custom message if provided', () => {
    service.showByStatus(200, 'Custom success');
    expect(nzNotificationSpy.success).toHaveBeenCalledWith(
      'Success',
      'Custom success'
    );
  });
});
