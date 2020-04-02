import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperTeamComponent } from './super-team.component';

describe('SuperTeamComponent', () => {
  let component: SuperTeamComponent;
  let fixture: ComponentFixture<SuperTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
