import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSoftwareRequirementComponent } from './add-software-requirement.component';

describe('AddSoftwareRequirementComponent', () => {
  let component: AddSoftwareRequirementComponent;
  let fixture: ComponentFixture<AddSoftwareRequirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSoftwareRequirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSoftwareRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
