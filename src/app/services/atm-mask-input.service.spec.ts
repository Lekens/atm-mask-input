import { TestBed, inject } from '@angular/core/testing';

import { AtmMaskInputService } from './atm-mask-input.service';

describe('AtmMaskInputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtmMaskInputService]
    });
  });

  it('should be created', inject([AtmMaskInputService], (service: AtmMaskInputService) => {
    expect(service).toBeTruthy();
  }));
});
