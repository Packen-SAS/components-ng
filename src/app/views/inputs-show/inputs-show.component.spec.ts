import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsShowComponent } from './inputs-show.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('InputsShowComponent', () => {
  let component: InputsShowComponent;
  let fixture: ComponentFixture<InputsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputsShowComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing function clickSeeButton()', () => {
    expect(component.clickSeeButton('see')).toBeUndefined();
  });

  it('Testing function clickEdit()', () => {
    expect(component.clickEdit('edit')).toBeUndefined();
  });

  it('Testing function disableOrEnableInput() ', () => {
    expect(component.disableOrEnableInput()).toBeUndefined();
  });

  it('Testing function printValue() ', () => {
    component.valueInput = 'ABC-123';
    expect(component.printValue()).toBeUndefined();
  });
});
