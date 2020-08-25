import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenCheckboxComponent } from './packen-checkbox.component';
import { CheckItem } from '../../interfaces/check-item';

describe('PackenCheckboxComponent', () => {
  let component: PackenCheckboxComponent;
  let fixture: ComponentFixture<PackenCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackenCheckboxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Name of icon
  it('return the nameClass icon when state is checked', () => {
    expect(component.getClassIcon('checked')).toEqual('icon-checkmark');
  });

  it('return the nameClass icon when state is unchecked', () => {
    expect(component.getClassIcon('unchecked')).toEqual('');
  });

  // Change state of checkbox
  it('render function when changed the state of check', () => {
    component.values = [
      { id: 1, label: 'Label 1', state: 'checked', disabled: false },
      { id: 2, label: 'Label 2', state: 'checked', disabled: true },
      { id: 3, label: 'Label 3', state: 'unchecked', disabled: true }];

    const objCheck: CheckItem = { id: 1, label: 'label', disabled: false, state: 'checked' };
    expect(component.changeStateCheck(objCheck)).toBeUndefined();
  });

  it('render function when changed the state of check and disabled is true', () => {
    component.values = [
      { id: 1, label: 'Label 1', state: 'checked', disabled: false },
      { id: 2, label: 'Label 2', state: 'checked', disabled: true },
      { id: 3, label: 'Label 3', state: 'unchecked', disabled: true }];
    const objCheck: CheckItem = { id: 1, label: 'label', disabled: true, state: 'checked' };
    expect(component.changeStateCheck(objCheck)).toBeUndefined();
  });

  it('render function when changed the state of check and state is unchecked', () => {
    component.values = [
      { id: 1, label: 'Label 1', state: 'checked', disabled: false },
      { id: 2, label: 'Label 2', state: 'checked', disabled: true },
      { id: 3, label: 'Label 3', state: 'unchecked', disabled: true }];
    const objCheck: CheckItem = { id: 1, label: 'label', disabled: false, state: 'unchecked' };
    expect(component.changeStateCheck(objCheck)).toBeUndefined();
  });

  // Render class of checkbox
  it('render class checkbox when state is checked and disabled is true', () => {
    const objCheck: CheckItem = { id: 2, label: 'label', disabled: true, state: 'checked' };
    expect(component.getClassCheckBox(objCheck)).toEqual('contentCheckbox__checkbox--disabled');
  });

  it('render class checkbox when state is checked and disabled is false', () => {
    const objCheck: CheckItem = { id: 2, label: 'label', disabled: false, state: 'checked' };
    expect(component.getClassCheckBox(objCheck)).toEqual('contentCheckbox__checkbox--active');
  });

  it('render class checkbox when state is unchecked and disabled is true', () => {
    const objCheck: CheckItem = { id: 2, label: 'label', disabled: true, state: 'unchecked' };
    expect(component.getClassCheckBox(objCheck)).toEqual('contentCheckbox__checkbox--uncheckDisabled');
  });

  it('render class checkbox when state is unchecked and disabled is false', () => {
    const objCheck: CheckItem = { id: 2, label: 'label', disabled: false, state: 'unchecked' };
    expect(component.getClassCheckBox(objCheck)).toEqual('contentCheckbox__checkbox--default');
  });

  // Render type of cursor when check is disabled
  it('render type class cursor when check is disabled', () => {
    const objCheck: CheckItem = { id: 3, label: 'label', disabled: true, state: 'checked' };
    expect(component.getTypeCursor(objCheck)).toEqual('contentCheckbox--disabled');
  });

  it('render type class cursor when check is not disabled', () => {
    const objCheck: CheckItem = { id: 3, label: 'label', disabled: false, state: 'checked' };
    expect(component.getTypeCursor(objCheck)).toEqual('contentCheckbox--default');
  });
});
