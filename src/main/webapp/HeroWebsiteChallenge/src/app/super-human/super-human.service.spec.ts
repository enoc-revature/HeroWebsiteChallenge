import { TestBed } from '@angular/core/testing';

import { SuperHumanService } from './super-human.service';

describe('SuperHumanService', () => {
  let service: SuperHumanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperHumanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
