import { TestBed } from '@angular/core/testing';

import { RegisterSuperTeamService } from './register-super-team.service';

describe('RegisterSuperTeamService', () => {
  let service: RegisterSuperTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterSuperTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
