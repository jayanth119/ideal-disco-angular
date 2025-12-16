import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private notification: NzNotificationService) {}

  showByStatus(status: number, message?: string): void {
    switch (status) {
      case 200:
      case 201:
        this.success(message || 'Operation completed successfully');
        break;

      case 400:
        this.warning(message || 'Bad request');
        break;

      case 401:
      case 403:
        this.error(message || 'Unauthorized access');
        break;

      case 404:
        this.info(message || 'Resource not found');
        break;

      default:
        if (status >= 500) {
          this.error('Server error. Please try again later.');
        }
    }
  }

  success(msg: string): void {
    this.notification.success('Success', msg);
  }

  warning(msg: string): void {
    this.notification.warning('Warning', msg);
  }

  info(msg: string): void {
    this.notification.info('Info', msg);
  }

  error(msg: string): void {
    this.notification.error('Error', msg);
  }
}
