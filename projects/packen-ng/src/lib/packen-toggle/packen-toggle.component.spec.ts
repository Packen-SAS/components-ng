import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenToggleComponent } from './packen-toggle.component';
import { ToggleItem } from '../../interfaces/toggle-item';

describe('PackenToggleComponent', () => {
  let component: PackenToggleComponent;
  let fixture: ComponentFixture<PackenToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackenToggleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Styles of toggle
  it('render classStyleColor when toggle is disabled', () => {
    var objToggle: ToggleItem = { id: 1, disabled: true, offLabel: "Off", onLabel: 'On', status: 'checked' }
    expect(component.getClassStylesColor(objToggle)).toEqual('switch__slider--disabled');
  });

  it('render classStyleColor when toggle is disabled', () => {
    var objToggle: ToggleItem = { id: 1, disabled: false, offLabel: "Off", onLabel: 'On', status: 'checked' }
    expect(component.getClassStylesColor(objToggle)).toEqual('switch__slider--default');
  });

  //Change toggle
  it('render function changeToggle when is disabled', () => {
    var objToggle: ToggleItem = { id: 1, disabled: true, offLabel: "Off", onLabel: "On", status: 'checked' };
    expect(component.changeToggle(objToggle)).toBeUndefined();
  });

  it('render function changeToggle for value status, status is checked and disabled is false', () => {
    var objToggle: ToggleItem = { id: 1, disabled: false, offLabel: "Off", onLabel: "On", status: 'checked' };
    expect(component.changeToggle(objToggle)).toBeUndefined();
  });

  it('render function changeToggle for value status, status is unchecked and disabled is false', () => {
    var objToggle: ToggleItem = { id: 1, disabled: false, offLabel: 'Off', onLabel: "On", status: 'unchecked' };
    expect(component.changeToggle(objToggle)).toBeUndefined();
  });
});
