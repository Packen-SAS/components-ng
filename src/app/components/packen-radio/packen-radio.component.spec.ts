import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenRadioComponent } from './packen-radio.component';
import { RadioItem } from '../../interfaces/radio-item';

describe('PackenRadioComponent', () => {
  let component: PackenRadioComponent;
  let fixture: ComponentFixture<PackenRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackenRadioComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Checkbox class style
  it('render the class radio when idCheck is active and disabled is false', () => {
    component.selectedItemId = 1;
    var objRadio: RadioItem = { id: 1, disabled: false, label: 'label' };
    expect(component.getClassRadio(objRadio)).toEqual('contentRadio__radio contentRadio__radio--selected');
  });

  it('render the class radio when idCheck is active and disabled is true', () => {
    component.selectedItemId = 1;
    var objRadio: RadioItem = { id: 1, disabled: true, label: 'label' };
    expect(component.getClassRadio(objRadio)).toEqual('contentRadio__radio--selected--disabled');
  });

  it('render the class radio when idCheck is active and disabled is true', () => {
    component.selectedItemId = 1;
    var objRadio: RadioItem = { id: 1, disabled: true, label: 'label' };
    expect(component.getClassRadio(objRadio)).toEqual('contentRadio__radio--selected--disabled');
  });

  it('render the class radio when idCheck is inactive and disabled is true', () => {
    component.selectedItemId = 2;
    var objRadio: RadioItem = { id: 1, disabled: true, label: 'label' };
    expect(component.getClassRadio(objRadio)).toEqual('contentRadio__radio--default--disabled');
  });

  it('render the class radio when idCheck is inactive and disabled is false', () => {
    component.selectedItemId = 2;
    var objRadio: RadioItem = { id: 1, disabled: false, label: 'label' };
    expect(component.getClassRadio(objRadio)).toEqual('contentRadio__radio contentRadio__radio--default');
  });
  //Checkbox class style

  
  //Emit change of radio
  it('render when emit change of radio and disabled check is false ', () => {
    var objRadio: RadioItem = { id: 1, disabled: false, label : 'label'};
    expect(component.selectRadio(objRadio));
  });

  it('render when emit change of radio and disabled check is true', () =>{
    var objRadio: RadioItem = { id: 1, disabled: true, label : 'label'};
    expect(component.selectRadio(objRadio));
  })
  //Emit change of radio


  //Class styles of cursor
  it('render the class style of cursor when radio is disabled', () =>{
    expect(component.getClassTypeCursor(true)).toEqual('contentRadio--disabled');
  });

  it('render the class style of cursor when radio is not disabled ', () =>{
    expect(component.getClassTypeCursor(false)).toEqual('contentRadio--default');
  });
  //Class styles of cursor

});
