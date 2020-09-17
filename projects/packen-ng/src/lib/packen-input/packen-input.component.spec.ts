import { SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { PackenInputComponent } from './packen-input.component';

describe('PackenInputComponent', () => {
  let component: PackenInputComponent;
  let fixture: ComponentFixture<PackenInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PackenInputComponent
      ],
      imports: [
        FormsModule,
        NgxMaskModule.forRoot()
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Render the class styles input
  it('render the class of inputs when size is tiny', () => {
    expect(component.getClassStylesInput('tiny')).toBeUndefined();
  });

  it('render the class of input when size small and message is diferent to "" ', () => {
    expect(component.getClassStylesInput('small')).toBeUndefined();
  });

  it('render the class of inputs when size is medium ', () => {
    expect(component.getClassStylesInput('medium')).toBeUndefined();
  });

  it('render the class of inputs when size is large', () => {
    expect(component.getClassStylesInput('large')).toBeUndefined();
  });

  it('render the class of inputs when size is giant', () => {
    expect(component.getClassStylesInput('giant')).toBeUndefined();
  });

  // Render the class styles message error
  it('render the theme of message error when theme is default', () => {
    expect(component.getClassStylesMessageError('default')).toEqual('content__messageError--default');
  });

  it('render the theme of message error when theme is warning', () => {
    expect(component.getClassStylesMessageError('warning')).toEqual('content__messageError--warning');
  });

  it('render the theme of message error when theme is warning', () => {
    expect(component.getClassStylesMessageError('primary')).toEqual('content__messageError--primary');
  });

  it('render the theme of message error when theme is success', () => {
    expect(component.getClassStylesMessageError('success')).toEqual('content__messageError--success');
  });

  // Render the class styles of label
  it('render syles of label when size is tiny', () => {
    expect(component.getClassStylesLable('tiny')).toEqual('content__title--tiny');
  });

  it('render syles of label when size is large', () => {
    expect(component.getClassStylesLable('large')).toEqual('content__title--large');
  });

  it('render syles of label when size is giant', () => {
    expect(component.getClassStylesLable('giant')).toEqual('content__title--giant');
  });

  // Render the class styles text area
  it('render styles of textArea when size is tiny', () => {
    expect(component.getClassStylesTextArea('tiny')).toBeUndefined();
  });

  it('render styles of textArea when size is tiny and textMessage is diferent to "" and disabled is true', () => {
    component.disabled = true;
    expect(component.getClassStylesTextArea('tiny')).toBeUndefined();
  });

  // Render function focus and focus out
  it('render function focus ', () => {
    expect(component.focus()).toEqual('');
  });

  it('render function focus out', () => {
    expect(component.focusOut()).toEqual('');
  });

  // Render function onFocus
  it('Render function onFocus when is inside', () => {
    expect(component.onFocus(true)).toBeUndefined();
  });

  it('Render function onFocus when is outside', () => {
    expect(component.onFocus()).toBeUndefined();
  });

  // Render the size class of icon input
  it('render the class of icon when size is tiny', () => {
    expect(component.getClassSizeIconRight('tiny')).toEqual(' content__input-container__icon--tiny');
  });

  it('render the class of icon when size is medium', () => {
    expect(component.getClassSizeIconRight('medium')).toEqual(' content__input-container__icon--medium');
  });

  it('render the class of icon when size is medium', () => {
    expect(component.getClassSizeIconRight('large')).toEqual(' content__input-container__icon--large');
  });

  it('render the class of icon when size is giant', () => {
    expect(component.getClassSizeIconRight('giant')).toEqual(' content__input-container__icon--giant');
  });

  it('render the class of icon when size is medium and is son of dropdown', () => {
    component.isDropdown = true;
    expect(component.getClassSizeIconRight('medium')).toEqual(' content__input-container__icon--dropdown content__input-container__icon--medium');
  });

  // Render when change the value in input or textArea
  it('render function when change the textInput or textArea and length value is empty', () => {
    component.required = true;
    expect(component.changeTextInput('')).toBeUndefined();
  });

  it('render function when change the textInput or textArea and length value is empty and islazy is true', () => {
    component.required = true;
    component.lazy = true;
    expect(component.changeTextInput('')).toBeUndefined();
  });

  it('Render function when change the textInput or textArea and length value not is empty', () => {
    component.required = true;
    expect(component.changeTextInput('area')).toBeUndefined();
  });

  it('Render function chageTextArea validating the patter', () => {
    component.required = true;
    const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    component.pattern = pattern;
    expect(component.changeTextInput('email')).toBeUndefined();
  });

  it('Render function chageTextArea validating the patter', () => {
    component.required = true;
    const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    component.pattern = pattern;
    expect(component.changeTextInput('email')).toBeUndefined();
  });

  it('Render function when coinciding the pattern and required is false', () => {
    component.required = false;
    const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    component.pattern = pattern;
    expect(component.changeTextInput('email@fg')).toBeUndefined();
  });

  it('Render function when coinciding the pattern and required is false', () => {
    component.required = null;
    const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    component.pattern = pattern;
    component.value = 'email@fg';
    expect(component.changeTextInput('email@fg')).toBeUndefined();
  });

  it('Render function clickInsideContent', () => {
    expect(component.clickInsideContent()).toBeUndefined();
  });

  it('Render function clickOutsideContent ', () => {
    expect(component.clickOutsideContent()).toBeUndefined();
  });

  it('Render function clickOutsideContent when isset isCliskInside', () => {
    component.isClickInside = true;
    expect(component.clickOutsideContent()).toBeUndefined();
  });

  it('Render function ngAfterViewInit() when is lazy is true', () => {
    component.lazy = true;
    expect(component.ngAfterViewInit()).toBeUndefined();

    component.searchinput.nativeElement.dispatchEvent(new KeyboardEvent('keyup', {code: 'ArrowUp'}));
    fixture.detectChanges();
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
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
