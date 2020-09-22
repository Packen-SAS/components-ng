import { CUSTOM_ELEMENTS_SCHEMA, SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { PackenInputShowComponent } from './packen-input-show.component';

describe('PackenInputShowComponent', () => {
  let component: PackenInputShowComponent;
  let fixture: ComponentFixture<PackenInputShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackenInputShowComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        NgxMaskModule.forRoot()
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenInputShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing function getColorMessage() when color is yellow-off', () => {
    expect(component.getColorMessage('yellow-off')).toBeUndefined();
  });

  it('Testing function getColoeMessage() when color is red', () => {
    expect(component.getColorMessage('red')).toBeUndefined();
  });

  it('Testing function clickSeeButton()', () => {
    expect(component.clickSeeButton()).toBeUndefined();
  });

  it('Testing function clickEditButton()', () => {
    expect(component.clickEditButton()).toBeUndefined();
  });

  it('Testing function getWidthContentData() when is dropdown', () => {
    component.isDropdown = true;
    expect(component.getWidthContentData()).toBeUndefined();
  });

  it('Testing function getBackgroundClass() when phantom is true', () => {
    component.phantom = true;
    expect(component.getBackgroundClass()).toBeUndefined();
  });

  it('Testing function when change the color ', () => {
    component.ngOnChanges({
      color: new SimpleChange('red', false, false)
    });
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Testing function when change other item ', () => {
    component.ngOnChanges({
      url: new SimpleChange('red', false, false)
    });
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Testing function loadClassWhenIsInput()', () => {
    component.isInput = true;
    expect(component.loadClassWhenIsInput()).toBeUndefined();
  });

  it('Testing function showInputClick() when isInput is true', () => {
    component.isInput = true;
    expect(component.showInputClick()).toBeUndefined();
  });

  it('Testing function showInputClick() when isInput is false', () => {
    component.isInput = false;
    expect(component.showInputClick()).toBeUndefined();
  });

  it('Testing function clickOutsideContent()', () => {
    expect(component.clickOutsideContent()).toBeUndefined();
  });

  it('Testing function keyUpValue()', () => {
    component.value = 'Value';
    expect(component.keyUpValue('Value')).toBeUndefined();
  });

  it('Testing function keyUpValue() when value is empty', () => {
    expect(component.keyUpValue('')).toBeUndefined();
  });
});
