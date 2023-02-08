import { TestBed } from '@angular/core/testing';

import { AuModalService } from './au-modal.service';

describe('ModalService', () => {
  let service: AuModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
