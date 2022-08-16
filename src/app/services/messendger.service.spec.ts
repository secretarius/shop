import { TestBed } from '@angular/core/testing';

import { MessendgerService } from './messendger.service';

describe('MessendgerService', () => {
  let service: MessendgerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessendgerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
