import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
            imports: [RouterTestingModule , HttpClientTestingModule , NzNotificationModule],
            providers: [  NotificationService   ] 
    });
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
