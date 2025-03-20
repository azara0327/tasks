import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormForwardRefComponent } from './form-forward-ref.component';

describe('FormForwardRefComponent', () => {
  let component: FormForwardRefComponent;
  let fixture: ComponentFixture<FormForwardRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormForwardRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormForwardRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
