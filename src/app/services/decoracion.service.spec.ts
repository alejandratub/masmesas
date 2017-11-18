import { TestBed, inject } from '@angular/core/testing';

import { DecoracionService } from './decoracion.service';

describe('DecoracionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DecoracionService]
    });
  });

  it('should be created', inject([DecoracionService], (service: DecoracionService) => {
    expect(service).toBeTruthy();
  }));
});
