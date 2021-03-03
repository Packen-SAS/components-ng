import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenRadioComponent } from './packen-radio.component';
import { RadioItem } from '../../interfaces/radio-item';
import { SimpleChange } from '@angular/core';

describe('PackenRadioComponent', () => {
  let component: PackenRadioComponent;
  let fixture: ComponentFixture<PackenRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PackenRadioComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Checkbox class style
  it('render the class radio when idCheck is active and disabled is false', () => {
    component.selectedItemId = 1;
    const objRadio: RadioItem = { id: 1, disabled: false, label: 'label' };
    expect(component.getClassRadio(objRadio)).toEqual('contentRadio__radio contentRadio__radio--default');
  });

  it('render the class radio when idCheck is active and disabled is true', () => {
    component.selectedItemId = 1;
    const objRadio: RadioItem = { id: 1, disabled: true, label: 'label' };
    expect(component.getClassRadio(objRadio)).toEqual('contentRadio__radio--default--disabled');
  });

  it('render the class radio when idCheck is inactive and disabled is true', () => {
    component.selectedItemId = 2;
    const objRadio: RadioItem = { id: 1, disabled: true, label: 'label' };
    expect(component.getClassRadio(objRadio)).toEqual('contentRadio__radio--default--disabled');
  });

  it('render the class radio when idCheck is inactive and disabled is false', () => {
    component.selectedItemId = 2;
    component.value = 2;
    const objRadio: RadioItem = { id: 1, disabled: false, label: 'label' };
    expect(component.getClassRadio(objRadio)).toEqual('contentRadio__radio contentRadio__radio--default');
  });

  it('Render function getClassRadio when is selected and not is disabled', () => {
    component.value = 1;
    const objRadio: RadioItem = { id: 1, disabled: false, label: 'label' };
    expect(component.getClassRadio(objRadio)).toEqual('contentRadio__radio contentRadio__radio--selected');
  });

  it('Render function getClassRadio when is selected and is disabled', () => {
    component.value = 1;
    const objRadio: RadioItem = { id: 1, disabled: true, label: 'label' };
    expect(component.getClassRadio(objRadio)).toEqual('contentRadio__radio--selected--disabled');
  });

  // Emit change of radio
  it('render when emit change of radio and disabled check is false ', () => {
    const objRadio: RadioItem = { id: 1, disabled: false, label: 'label' };
    expect(component.selectRadio(objRadio)).toBeUndefined();
  });

  it('render when emit change of radio and disabled check is true', () => {
    const objRadio: RadioItem = { id: 1, disabled: true, label: 'label' };
    expect(component.selectRadio(objRadio)).toBeUndefined();
  });

  // Class styles of cursor
  it('render the class style of cursor when radio is disabled', () => {
    expect(component.getClassTypeCursor(true)).toEqual('contentRadio--disabled');
  });

  it('render the class style of cursor when radio is not disabled ', () => {
    expect(component.getClassTypeCursor(false)).toEqual('contentRadio--default ');
  });

  it('render the class style of cursor when radio is not disabled ', () => {
    component.theme = 'primary';
    expect(component.getClassTypeCursor(false)).toEqual('contentRadio--default contentRadio__primary-hover');
  });

  it('Testing method ngOnChanges() when disabled property does not exit', () => {
    component.ngOnChanges({});
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Testing method ngOnChanges() when disabled property exits and it is true', () => {
    component.radios = [{ id: 1, disabled: false, label: 'label' }];
    component.ngOnChanges({
      disabled: new SimpleChange(null, true, null)
    });
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Testing method ngOnChanges() when disabled property exits and it is false', () => {
    component.ngOnChanges({
      disabled: new SimpleChange(null, false, null)
    });
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Testing function getClassStyleLabel() when isset level and is disabled', () => {
    const objRadio: RadioItem = { id: 1, label: 'Label', disabled: true };
    component.theme = 'primary';
    expect(component.getClassStyleLabel(objRadio)).toEqual('contentRadio__label__level--color contentRadio__label--disabled');
  });

  it('Testing function getClassRadioLabel() when level is primary', () => {
    component.theme = 'primary';
    expect(component.getClassRadioLabelBorder()).toEqual('contentRadio__radio__level__primary');
  });
});
