import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserRequirementComponent } from './add-user-requirement.component.';

describe('AddUserRequirementComponent', () => {
  let component: AddUserRequirementComponent;
  let fixture: ComponentFixture<AddUserRequirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserRequirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
