import { TestBed } from '@angular/core/testing';

import { SerieServiceService } from './serie-service.service';

describe('SerieServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerieServiceService = TestBed.get(SerieServiceService);
    expect(service).toBeTruthy();
  });
});
