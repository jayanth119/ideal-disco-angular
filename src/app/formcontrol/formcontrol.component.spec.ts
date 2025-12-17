import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcontrolComponent } from './formcontrol.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormcontrolComponent', () => {
  let component: FormcontrolComponent;
  let fixture: ComponentFixture<FormcontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [RouterTestingModule , ReactiveFormsModule ],
      declarations: [ FormcontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
