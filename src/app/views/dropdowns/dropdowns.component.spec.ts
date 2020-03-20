import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownsComponent } from './dropdowns.component';

describe('DropdownsComponent', () => {
  let component: DropdownsComponent;
  let fixture: ComponentFixture<DropdownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('render function when exec function changeItemMenu1 ', () => {
    expect(component.changeItemMenu1(1)).toBeUndefined();
  });

  it('render function when exec function changeItemMenu2 ', () => {
    expect(component.changeItemMenu2(1)).toBeUndefined();
  });

  it('render function when exec function changeItemMenu3 ', () => {
    expect(component.changeItemMenu3(1)).toBeUndefined();
  });

  it('render function when change checkbox ', () => {
    let objCheck = { id: 1, label: 'Label 1', state: 'checked', disabled: false };

    component.checkboxes = [{ id: 1, label: 'Label 1', state: 'checked', disabled: false },
    { id: 2, label: 'Label 2', state: 'checked', disabled: true },
    { id: 3, label: 'Label 3', state: 'unchecked', disabled: true }]
    expect(component.changeCheckbox(objCheck)).toBeUndefined();
  });

  it('render when exect function change radio', () =>{
    expect(component.changeRadio(2)).toBeUndefined();
  }); 


});
