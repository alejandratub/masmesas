import { TestBed, inject } from '@angular/core/testing';

import { MueblesService } from './muebles.service';

describe('MueblesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MueblesService]
    });
  });

  it('should be created', inject([MueblesService], (service: MueblesService) => {
    expect(service).toBeTruthy();
  }));
});
