import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';

describe('AddProjectComponent', () => {
  let component: ProjectComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectComponent ]
    })
    .compileComponents();
  }));

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
