import { CUSTOM_ELEMENTS_SCHEMA, SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DropdownShowItem } from 'dist/packen-ng/interfaces/dropdown-show-item';

import { PackenDropdownShowComponent } from './packen-dropdown-show.component';

describe('PackenDropdownShowComponent', () => {
  let component: PackenDropdownShowComponent;
  let fixture: ComponentFixture<PackenDropdownShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackenDropdownShowComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenDropdownShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing function clickInputComponent()', () => {
    expect(component.clickInputComponent()).toBeUndefined();
  });

  it('Testing function clickInputComponent() and disabled is true', () => {
    component.disabled = true;
    expect(component.clickInputComponent()).toBeUndefined();
  });

  it('Testing function clickOutsideContent()', () => {
    expect(component.clickOutsideContent()).toBeUndefined();
  });

  it('Testing function clickOutsideContent() when valueWrittenInput is empty', () => {
    component.valueWrittenInput = '';
    component.value = 1;
    expect(component.clickOutsideContent()).toBeUndefined();
  });

  it('Testing function clickOutsideContent() when value isset', () => {
    component.value = 23;
    component.valueWrittenInput = 'Sal';
    expect(component.clickOutsideContent()).toBeUndefined();
  });

  it('Testing function clickOutsideContent() when is clicked', () => {
    component.valueWrittenInput = '';
    component.isClicked = true;
    expect(component.clickOutsideContent()).toBeUndefined();
  });

  it('Testing function selectItem()', () => {
    const itemDropdown: DropdownShowItem = { id: 1, title: 'Entidad de salud' };
    expect(component.selectItem(itemDropdown)).toBeUndefined();
  });

  it('Testing function getClassIsSelected() ', () => {
    const itemDropdown: DropdownShowItem = { id: 1, title: 'Entidad de salud' };
    expect(component.getClassIsSelected(itemDropdown)).toEqual('');
  });

  it('Testing function getClassIsSelected() when isset id', () => {
    component.value = 1;
    const itemDropdown: DropdownShowItem = { id: 1, title: 'Entidad de salud' };
    expect(component.getClassIsSelected(itemDropdown)).toEqual('cont__component__input-box__options__item--selected');
  });

  it('Testing function loadTitleInput()', () => {
    component.items = [{ id: 1, title: 'Entidad de salud' }];
    component.value = 1;
    expect(component.loadTitleInput()).toBeUndefined();
  });

  it('Testing function loadTitleInput() not match with id', () => {
    component.items = [{ id: 1, title: 'Entidad de salud' }];
    component.value = 5;
    expect(component.loadTitleInput()).toBeUndefined();
  });

  it('Testing function validateRequiredInput()', () => {
    component.valueWrittenInput = 'Sal';
    component.required = true;
    expect(component.validateRequiredInput()).toBeUndefined();
  });

  it('Testing function validateRequiredInput()', () => {
    component.valueWrittenInput = '';
    component.required = true;
    expect(component.validateRequiredInput()).toBeUndefined();
  });

  it('Testing function keyUpSearch() when field is not required', () => {
    component.required = false;
    expect(component.keyUpSearch()).toBeUndefined();

    component.searchElement.nativeElement.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowUp' }));
    fixture.detectChanges();
  });

  it('Testing function keyUpSearch() when field is required', () => {
    component.required = true;
    expect(component.keyUpSearch()).toBeUndefined();

    component.searchElement.nativeElement.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowUp' }));
    fixture.detectChanges();
  });

  it('Testing function ngOnChanges()', () => {
    component.value = 1;
    component.ngOnChanges({
      value: new SimpleChange(null, new File([], ''), null),
      items: new SimpleChange(null, [], null),
      disabled: new SimpleChange(true, true, null)
    });
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Testing function ngOnChanges() when not isset changes', () => {
    expect(component.ngOnChanges({})).toBeUndefined();
  });

  it('Testing function getClassIsPhantom()', () => {
    component.phantom = true;
    expect(component.getClassIsPhantom()).toBeUndefined();
  });

  it('Testing function getClassIsDisabled()', () => {
    component.disabled = true;
    expect(component.getClassIsDisabled()).toBeUndefined();
  });
});
