import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIncrementComponent } from './add-increment.component';

describe('AddIncrementComponent', () => {
  let component: AddIncrementComponent;
  let fixture: ComponentFixture<AddIncrementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIncrementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIncrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
