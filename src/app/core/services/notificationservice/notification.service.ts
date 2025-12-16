import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private notification: NzNotificationService) {}

  showByStatus(status: number, message?: string): void {
    // 🔹 1xx – Informational
    if (status >= 100 && status < 200) {
      this.info(message || 'Request received, processing');
      return;
    }

    // 🟢 2xx – Success
    if (status >= 200 && status < 300) {
      this.success(message || 'Operation completed successfully');
      return;
    }

    // 🟡 3xx – Redirection
    if (status >= 300 && status < 400) {
      this.info(message || 'Request redirected');
      return;
    }

    // 🔴 4xx – Client Errors
    if (status >= 400 && status < 500) {
      // Specific important cases
      if (status === 401 || status === 403) {
        this.error(message || 'Unauthorized access');
        return;
      }

      if (status === 404) {
        this.info(message || 'Resource not found');
        return;
      }

      if (status === 429) {
        this.warning(message || 'Too many requests. Try again later');
        return;
      }

      // Generic client error
      this.warning(message || 'Client error occurred');
      return;
    }

    // 🔥 5xx – Server Errors
    if (status >= 500 && status < 600) {
      this.error(message || 'Server error. Please try again later');
      return;
    }

    // ⚠️ Unknown / invalid status
    this.error(message || `Unexpected error (status: ${status})`);
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
