import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenDropdownComponent } from './packen-dropdown.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DropdownItem } from 'src/app/interfaces/dropdown-item';

describe('PackenDropdownComponent', () => {
  let component: PackenDropdownComponent;
  let fixture: ComponentFixture<PackenDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackenDropdownComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('render when item is selected', () => {
    component.selected = 1;
    component.items = [{
      id: 1,
      left: false,
      right: false,
      disabled: false,
      title: 'Menu item'
    },
    {
      id: 2,
      left: false,
      right: false,
      disabled: false,
      title: 'Menu item 2'
    }];
    expect(component.getItemSelected());
  });

  it('render item selected when the type is radio', () => {
    component.items = [{
      id: 1,
      left: false,
      right: false,
      disabled: false,
      title: 'Menu item'
    },
    {
      id: 2,
      left: false,
      right: false,
      disabled: false,
      title: 'Menu item 2'
    }];

    component.type = 'radio';
    component.selectedItemId = 1;
    expect(component.getItemSelected())
  });

  it('render class of item when is disabled', () => {
    let objDropdown: DropdownItem = { id: 1, disabled: true, info: 'info text', left: false, right: false, title: 'title' };
    expect(component.getClassItem(objDropdown)).toEqual('content__item content__item--disabled');
  });

  it('render class of item when not is disabled, not has info text and id is selected', async () => {
    component.selected = 1;
    let objDropdown: DropdownItem = {
      id: 1, disabled: false,
      left: false, right: false, title: 'title'
    };
    expect(component.getClassItem(objDropdown));
  });

  it('render class of item when not is disabled, not has info text and id is diferent to selected', async () => {
    component.selected = 1;
    let objDropdown: DropdownItem = {
      id: 1, disabled: false,
      info: 'Info text',
      left: false, right: false, title: 'title'
    };
    expect(component.getClassItem(objDropdown));
  });

  it('render class of item when not is disabled, not has info and not is selected ', () => {
    let objDropdown: DropdownItem = {
      id: 1, disabled: false,
      left: false, right: false, title: 'title'
    };
    component.selected = 2;
    expect(component.getClassItem(objDropdown));
  });

  it('render class of title when not has info and is selected', () => {
    component.selected = 1;
    let objDropdown: DropdownItem = {
      id: 1, disabled: false,
      left: false, right: false, title: 'title'
    };
    expect(component.getClassTitle(objDropdown));
  });

  it('render class of title when has info and not is selected', () => {
    component.selected = 2;
    let objDropdown: DropdownItem = {
      id: 1, disabled: false,
      info: 'Facturado',
      left: false, right: false, title: 'title'
    };
    expect(component.getClassTitle(objDropdown));
  });

  it('render class of title when has info and not is selected', () => {
    component.selected = 2;
    let objDropdown: DropdownItem = {
      id: 1, disabled: false,
      left: false, right: false, title: 'title'
    };
    expect(component.getClassTitle(objDropdown));
  });

  it('render function when item is select ', () => {
    let objDropdown: DropdownItem = {
      id: 1, disabled: false,
      left: false, right: false, title: 'title'
    };
    expect(component.selectItem(objDropdown));
  });

  it('render function when item is select and disabled is true ', () => {
    let objDropdown: DropdownItem = {
      id: 1, disabled: true,
      left: false, right: false, title: 'title'
    };
    expect(component.selectItem(objDropdown));
  });

  it('render class text when is disabled', () => {
    let objDropdown: DropdownItem = {
      id: 1, disabled: true,
      left: false, right: false, title: 'title'
    };
    expect(component.getClassText(objDropdown));
  });

  it('render class text', () => {
    let objDropdown: DropdownItem = {
      id: 1, disabled: false,
      left: false, right: false, title: 'title'
    };
    expect(component.getClassText(objDropdown));
  });

  it('render function when click in input ', () => {
    expect(component.clickInput());
  });

  it('render color sub title when item is selected', () => {
    component.selected = 1;
    let objDropdown: DropdownItem = {
      id: 1, disabled: false,
      left: false, right: false, title: 'title'
    };
    expect(component.getColorSubTitleWhenItemIsSelected(objDropdown));
  });

  it('render color sub title when item is selected and is diferent to selected id', () => {
    component.selected = 2;
    let objDropdown: DropdownItem = {
      id: 1, disabled: false,
      left: false, right: false, title: 'title'
    };
    expect(component.getColorSubTitleWhenItemIsSelected(objDropdown));
  });

  it('render color sub title when item is selected and has info text', () => {
    component.selected = 1;
    let objDropdown: DropdownItem = {
      id: 1, disabled: false,
      info: 'Info text',
      left: false, right: false, title: 'title'
    };
    expect(component.getColorSubTitleWhenItemIsSelected(objDropdown));
  });

  it('render color icon when item is selected ', () => {
    component.selected = 1;
    let objDropdown: DropdownItem = {
      id: 1, disabled: false,
      info: 'Info text',
      left: false, right: false, title: 'title'
    };
    expect(component.getColorIconWhenItemIsSelected(objDropdown)).toEqual('content__item__icon--selected');
  });

  it('render color icon when item not is selected ', () => {
    component.selected = 1;
    let objDropdown: DropdownItem = {
      id: 2, disabled: false,
      info: 'Info text',
      left: false, right: false, title: 'title'
    };
    expect(component.getColorIconWhenItemIsSelected(objDropdown));
  });

  it('render color icon when item is disabled ', () => {
    component.selected = 1;
    let objDropdown: DropdownItem = {
      id: 2, disabled: true,
      info: 'Info text',
      left: false, right: false, title: 'title'
    };
    expect(component.getColorIconWhenItemIsSelected(objDropdown)).toEqual('content__item__icon--disabled');
  });

  it('render opacity image when item is disabled', () => {
    let objDropdown: DropdownItem = {
      id: 2, disabled: true,
      info: 'Info text',
      left: false, right: false, title: 'title'
    };
    expect(component.getOpacityImageItemDisabled(objDropdown));
  });

  it('render opacity image when item not is disabled', () => {
    let objDropdown: DropdownItem = {
      id: 2, disabled: false,
      info: 'Info text',
      left: false, right: false, title: 'title'
    };
    expect(component.getOpacityImageItemDisabled(objDropdown));
  });

  it('render color info type when is active ', () => {
    let objDropdown: DropdownItem = {
      id: 2, disabled: false,
      info: 'Info text',
      typeInfo: 'active',
      left: false, right: false, title: 'title'
    };
    expect(component.getColorInfoType(objDropdown)).toEqual('content__item__contentText__textP__info--active');
  });

  it('render color info type when is default or other ', () => {
    let objDropdown: DropdownItem = {
      id: 2, disabled: false,
      info: 'Info text',
      typeInfo: 'default',
      left: false, right: false, title: 'title'
    };
    expect(component.getColorInfoType(objDropdown)).toBeUndefined();
  });

  it('render function change state checkbox ', () => {
    var data = { id: 1, state: 'checked' };
    expect(component.changeStateCheckBox(data)).toBeUndefined();
  });

  it('render function change select radio ', () => {
    component.items = [{ id: 1, label: 'Label 1', disabled: false },
    { id: 2, label: 'Label 2', disabled: false }];
    expect(component.changeRadio(1));
  });

  it('render function change select radio and not isset ', () => {
    component.items = [{ id: 1, label: 'Label 1', disabled: false },
    { id: 2, label: 'Label 2', disabled: false }];
    expect(component.changeRadio(4));
  });

  it('render function when action onCLick is outside of content', () => {
    expect(component.clickOutsideContent()).toBeUndefined();
  });

});
