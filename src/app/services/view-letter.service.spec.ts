import { TestBed } from '@angular/core/testing';

import { ViewLetterService } from './view-letter.service';

describe('ViewLetterService', () => {
  let service: ViewLetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewLetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
