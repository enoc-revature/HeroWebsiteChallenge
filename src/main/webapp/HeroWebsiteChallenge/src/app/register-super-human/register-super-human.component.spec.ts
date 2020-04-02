import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSuperHumanComponent } from './register-super-human.component';

describe('RegisterSuperHumanComponent', () => {
  let component: RegisterSuperHumanComponent;
  let fixture: ComponentFixture<RegisterSuperHumanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSuperHumanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSuperHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
