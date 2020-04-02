import { TestBed } from '@angular/core/testing';

import { RegisterSuperHumanService } from './register-super-human.service';

describe('RegisterSuperHumanService', () => {
  let service: RegisterSuperHumanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterSuperHumanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
