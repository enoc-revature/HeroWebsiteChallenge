import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSuperTeamComponent } from './register-super-team.component';

describe('RegisterSuperTeamComponent', () => {
  let component: RegisterSuperTeamComponent;
  let fixture: ComponentFixture<RegisterSuperTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSuperTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSuperTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
