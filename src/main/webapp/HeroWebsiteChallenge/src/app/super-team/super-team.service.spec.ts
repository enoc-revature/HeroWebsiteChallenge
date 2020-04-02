import { TestBed } from '@angular/core/testing';

import { SuperTeamService } from './super-team.service';

describe('SuperTeamService', () => {
  let service: SuperTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
