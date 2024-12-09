import { TestBed } from '@angular/core/testing';

import { MayaraPetServService } from './mayara-pet-serv.service';

describe('MayaraPetServService', () => {
  let service: MayaraPetServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MayaraPetServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
