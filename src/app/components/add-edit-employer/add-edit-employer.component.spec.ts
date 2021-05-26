import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmployerComponent } from './add-edit-employer.component';

describe('AddEditEmployerComponent', () => {
  let component: AddEditEmployerComponent;
  let fixture: ComponentFixture<AddEditEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
