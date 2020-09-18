import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PackenDropdownComponent } from './packen-dropdown.component';
import { CUSTOM_ELEMENTS_SCHEMA, SimpleChange } from '@angular/core';
import { DropdownItem } from 'src/app/interfaces/dropdown-item';
import { dropdownListMock, dropdownLabelListMock } from '../../assets/mocks/select.mock';

describe('PackenDropdownComponent', () => {
  let component: PackenDropdownComponent;
  let fixture: ComponentFixture<PackenDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackenDropdownComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('render when item is selected', () => {
    component.value = 1;
    component.items = [{
      id: 1,
      disabled: false,
      title: 'Menu item'
    },
    {
      id: 2,
      disabled: false,
      title: 'Menu item 2'
    }];
    expect(component.getItemSelected()).toBeUndefined();
    component.value = 1;
    expect(component.getItemSelected()).toBeUndefined();
  });

  it('Render function getItemSelected when not usset a itemSelected', () => {
    component.value = 5;
    component.items = [{
      id: 1,
      disabled: false,
      title: 'Menu item'
    },
    {
      id: 2,
      disabled: false,
      title: 'Menu item 2'
    }];
    expect(component.getItemSelected()).toBeUndefined();
  });

  it('Render function getItemSelected when not usset a itemSelected and is the second excute function', () => {
    component.value = 5;
    component.items = [{
      id: 1,
      disabled: false,
      title: 'Menu item'
    },
    {
      id: 2,
      disabled: false,
      title: 'Menu item 2'
    }];
    expect(component.getItemSelected()).toBeUndefined();
  });

  it('Render function getItemSelected() when type is different to radio and items is empty', () => {
    component.type = 'checkbox';
    component.items = null;
    expect(component.getItemSelected()).toBeUndefined();
  });

  it('Render function getItemSelected() when type is radio and item is null ', () => {
    component.type = 'radio';
    component.items = null;
    expect(component.getItemSelected()).toBeUndefined();
  });

  it('render item selected when the type is radio', () => {
    component.items = [{
      id: 1,
      disabled: false,
      title: 'Menu item'
    },
    {
      id: 2,
      disabled: false,
      title: 'Menu item 2'
    }];

    component.type = 'radio';
    component.value = 1;
    expect(component.getItemSelected()).toBeUndefined();
  });

  it('render item selected when the type is radio and not isset the radio selected', () => {
    component.items = [{
      id: 1,
      disabled: false,
      title: 'Menu item'
    },
    {
      id: 2,
      disabled: false,
      title: 'Menu item 2'
    }];

    component.type = 'radio';
    component.value = 3;
    expect(component.getItemSelected()).toBeUndefined();
  });

  it('render class of item when is disabled', () => {
    const objDropdown: DropdownItem = { id: 1, disabled: true, info: 'info text', title: 'title' };
    expect(component.getClassItem(objDropdown)).toEqual('content__item content__item--disabled');
  });

  it('render class of item when not is disabled, not has info text and id is selected', async () => {
    component.value = 1;
    const objDropdown: DropdownItem = {
      id: 1, disabled: false, title: 'title',
      subTitle: 'subtitle', typeInfo: 'warning'
    };
    expect(component.getClassItem(objDropdown)).toEqual('content__item content__item--selected');
  });

  it('render class of item when not is disabled, not has info text and id is diferent to selected', () => {
    component.value = 1;
    const objDropdown: DropdownItem = {
      id: 1, disabled: false,
      info: 'Info text', title: 'Title',
      subTitle: 'subtitle', typeInfo: 'warning'
    };
    expect(component.getClassItem(objDropdown)).toBeUndefined();
  });

  it('render class of item when not is disabled, not has info and not is selected ', () => {
    const objDropdown: DropdownItem = {
      id: 1, disabled: false,
      info: null, title: 'Title'
    };
    component.value = 2;
    expect(component.getClassItem(objDropdown)).toBeUndefined();
  });

  it('render class of title when not has info and is selected', () => {
    component.value = 1;
    const objDropdown: DropdownItem = {
      id: 1, disabled: false, title: 'title',
      info: null, subTitle: 'Subtitle', typeInfo: 'warning'
    };
    expect(component.getClassTitle(objDropdown)).toEqual('content__item__contentText__textP__title--selected');
  });

  it('render class of title when has info and not is selected', () => {
    component.value = 2;
    const objDropdown: DropdownItem = {
      id: 1, disabled: false, title: 'title',
      info: null, subTitle: 'Subtitle', typeInfo: 'warning'
    };
    expect(component.getClassTitle(objDropdown)).toBeUndefined();
  });

  it('render class of title when has info and not is selected', () => {
    component.value = 2;
    const objDropdown: DropdownItem = {
      id: 1, disabled: false, title: 'title',
      info: 'Info', subTitle: 'Subtitle', typeInfo: 'warning'
    };
    expect(component.getClassTitle(objDropdown)).toBeUndefined();
  });

  it('render function when item is select ', () => {
    const objDropdown: DropdownItem = {
      id: 1, disabled: false, title: 'title'
    };
    expect(component.selectItem(objDropdown)).toBeUndefined();
  });

  it('render function when item is select and disabled is true ', () => {
    const objDropdown: DropdownItem = {
      id: 1, disabled: true, title: 'title'
    };
    expect(component.selectItem(objDropdown)).toBeUndefined();
  });

  it('render class text when is disabled', () => {
    const objDropdown: DropdownItem = {
      id: 1, disabled: true, title: 'title'
    };
    expect(component.getClassText(objDropdown)).toEqual('content__item__contentText__textP--disabled');
  });

  it('render class text', () => {
    const objDropdown: DropdownItem = {
      id: 1, disabled: false, title: 'title'
    };
    expect(component.getClassText(objDropdown)).toBeUndefined();
  });

  it('render function when click in input and is not disabled ', () => {
    component.disabled = false;
    expect(component.clickInput()).toBeUndefined();
  });

  it('render function when click in input and is disabled ', () => {
    component.disabled = true;
    expect(component.clickInput()).toBeUndefined();
  });

  it('render color sub title when item is selected', () => {
    component.value = 1;
    const objDropdown: DropdownItem = {
      id: 1, disabled: false, title: 'title'
    };
    expect(component.getColorSubTitleWhenItemIsSelected(objDropdown)).toEqual('content__item__contentText__textP__title--selected');
  });

  it('render color sub title when item is selected and is diferent to selected id', () => {
    component.value = 2;
    const objDropdown: DropdownItem = {
      id: 1, disabled: false, title: 'title'
    };
    expect(component.getColorSubTitleWhenItemIsSelected(objDropdown)).toBeUndefined();
  });

  it('render color sub title when item is selected and has info text', () => {
    component.value = 1;
    const objDropdown: DropdownItem = {
      id: 1, disabled: false,
      info: 'Info text', title: 'title'
    };
    expect(component.getColorSubTitleWhenItemIsSelected(objDropdown)).toBeUndefined();
  });

  it('render color icon when item is selected ', () => {
    component.value = 1;
    const objDropdown: DropdownItem = {
      id: 1, disabled: false,
      info: 'Info text', title: 'title'
    };
    expect(component.getColorIconWhenItemIsSelected(objDropdown)).toEqual('content__item__icon--selected');
  });

  it('render color icon when item not is selected ', () => {
    component.value = 1;
    const objDropdown: DropdownItem = {
      id: 2, disabled: false,
      info: 'Info text', title: 'title'
    };
    expect(component.getColorIconWhenItemIsSelected(objDropdown)).toBeUndefined();
  });

  it('render color icon when item is disabled ', () => {
    component.value = 1;
    const objDropdown: DropdownItem = {
      id: 2, disabled: true,
      info: 'Info text', title: 'title'
    };
    expect(component.getColorIconWhenItemIsSelected(objDropdown)).toEqual('content__item__icon--disabled');
  });

  it('render opacity image when item is disabled', () => {
    const objDropdown: DropdownItem = {
      id: 2, disabled: true,
      info: 'Info text', title: 'title'
    };
    expect(component.getOpacityImageItemDisabled(objDropdown)).toEqual('content__item__avatar--disabled');
  });

  it('render opacity image when item not is disabled', () => {
    const objDropdown: DropdownItem = {
      id: 2, disabled: false,
      info: 'Info text', title: 'title'
    };
    expect(component.getOpacityImageItemDisabled(objDropdown)).toBeUndefined();
  });

  it('render color info type when is active ', () => {
    const objDropdown: DropdownItem = {
      id: 2, disabled: false,
      info: 'Info text',
      typeInfo: 'active', title: 'title'
    };
    expect(component.getColorInfoType(objDropdown)).toEqual('content__item__contentText__textP__info--active');
  });

  it('render color info type when is default or other ', () => {
    const objDropdown: DropdownItem = {
      id: 2, disabled: false,
      info: 'Info text',
      typeInfo: 'default', title: 'title'
    };
    expect(component.getColorInfoType(objDropdown)).toBeUndefined();
  });

  it('render function change state checkbox ', () => {
    const data = { id: 1, state: 'checked' };
    expect(component.changeStateCheckBox(data)).toBeUndefined();
  });

  it('render function change select radio ', () => {
    component.items = [{ id: 1, label: 'Label 1', disabled: false },
    { id: 2, label: 'Label 2', disabled: false }];
    expect(component.changeRadio(1)).toBeUndefined();
  });

  it('render function change select radio and not isset ', () => {
    component.items = [{ id: 1, label: 'Label 1', disabled: false },
    { id: 2, label: 'Label 2', disabled: false }];
    expect(component.changeRadio(4)).toBeUndefined();
  });

  it('render function when action onCLick is outside of content', () => {
    expect(component.clickOutsideContent()).toBeUndefined();
  });

  it('Render function keyUpInput() and include the text', () => {
    component.items = [
      { id: 1, label: 'Label 1', disabled: false },
      { id: 2, label: 'Label 2', disabled: false },
      { id: 3, label: 'Label 3', disabled: false },
      { id: 4, label: 'Label 4', disabled: true }
    ];
    component.type = 'radio';
    expect(component.keyUpInput('Label')).toBeUndefined();
  });

  it('Render function keyUpInput() and not include the text', () => {
    component.items = [
      { id: 1, label: 'Label 1', disabled: false },
      { id: 2, label: 'Label 2', disabled: false },
      { id: 3, label: 'Label 3', disabled: false },
      { id: 4, label: 'Label 4', disabled: true }
    ];
    component.type = 'radio';
    expect(component.keyUpInput('Menu')).toBeUndefined();
  });

  it('Render function keyUpInput() when type is default and include the text', () => {
    component.items = dropdownListMock;
    component.type = 'default';
    expect(component.keyUpInput('Menu')).toBeUndefined();
  });

  it('Render function keyUpInput() when type is default and include the text', () => {
    component.value = 'label';
    component.items = dropdownListMock;
    component.type = 'default';
    expect(component.keyUpInput('Label')).toBeUndefined();
  });

  it('Render function keyUpInput() when lazy is true', () => {
    component.value = 'label';
    component.lazy = true;
    component.items = dropdownListMock;
    component.type = 'default';
    expect(component.keyUpInput('Label')).toBeUndefined();
  });

  it('Testing method keyUpInput() when lazy is false', () => {
    component.value = 'label';
    component.lazy = false;
    component.items = dropdownLabelListMock;
    component.type = 'default';
    expect(component.keyUpInput('Label')).toBeUndefined();
  });

  it('Testing method keyUpInput() when type is default and not include the text', () => {
    component.value = 'label';
    component.items = dropdownListMock;
    component.type = 'default';
    component.lazy = false;
    expect(component.keyUpInput('')).toBeUndefined();
  });

  it('Render function keyUpInput() when lazy is true and value length is empty', () => {
    component.value = 'label';
    component.lazy = true;
    component.items = dropdownListMock;
    component.type = 'default';
    expect(component.keyUpInput('')).toBeUndefined();
  });

  it('Render function clickOutSideContent', () => {
    component.value = false;
    expect(component.clickOutsideContent()).toBeUndefined();
  });

  it('Render function clickOutSideContent', () => {
    component.value = true;
    expect(component.clickOutsideContent()).toBeUndefined();
  });

  it('Testing method clickOutSideContent() when is lazy', () => {
    component.value = true;
    component.lazy = true;
    expect(component.clickOutsideContent()).toBeUndefined();
  });

  it('Testing method clickOutSideContent() when found item is in temporary list', () => {
    component.temporaryItemsList = [{ id: 1, disabled: false }];
    component.value = 1;
    component.lazy = false;
    expect(component.clickOutsideContent()).toBeUndefined();
  });

  it('Testing method clickOutSideContent() when found item is not in temporary list', () => {
    component.temporaryItemsList = [{ id: 1, disabled: false }];
    component.value = 2;
    component.lazy = false;
    expect(component.clickOutsideContent()).toBeUndefined();
  });

  it('Testing method ngOnChanges() when items change the property', () => {
    component.ngOnChanges({
      items: new SimpleChange(null, null, true)
    });
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Testing method ngOnChanges() when items change the property', () => {
    component.ngOnChanges({
      other: new SimpleChange(null, null, true)
    });
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Testing method ngOnChanges() when disabled property does not exit', () => {
    component.ngOnChanges({});
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Testing method ngOnChanges() when disabled property exits and it is true', () => {
    component.disabled = true;
    component.ngOnChanges({
      disabled: new SimpleChange(null, true, null)
    });
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Testing method ngOnChanges() when disabled property exits and it is false', () => {
    component.disabled = false;
    component.ngOnChanges({
      disabled: new SimpleChange(null, false, false)
    });
  });
});
