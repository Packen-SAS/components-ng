import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenInputComponent } from './packen-input.component';

describe('PackenInputComponent', () => {
  let component: PackenInputComponent;
  let fixture: ComponentFixture<PackenInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackenInputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Render the class styles input
  it('render the class of inputs when size is tiny', () => {
    expect(component.getClassStylesInput('tiny')).toEqual('content__input-container__input--tiny');
  });

  it('render the class of input when size small and message is diferent to "" ', () => {
    component.textMessage = 'Error';
    expect(component.getClassStylesInput('small')).toEqual('content__input-container__input--small content__input-container__input--error');
  });

  it('render the class of inputs when size is medium ', () => {
    expect(component.getClassStylesInput('medium')).toEqual('content__input-container__input--medium');
  });

  it('render the class of inputs when size is large', () => {
    expect(component.getClassStylesInput('large')).toEqual('content__input-container__input--large');
  });

  it('render the class of inputs when size is giant', () => {
    expect(component.getClassStylesInput('giant')).toEqual('content__input-container__input--large');
  });
  //Render the class styles input


  //Render the class styles message error
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
  //Render the class styles message error


  //Render the class styles of label
  it('render syles of label when size is tiny', () =>{
    expect(component.getClassStylesLable('tiny')).toEqual('content__title--tiny');
  });

  it('render syles of label when size is large', () =>{
    expect(component.getClassStylesLable('large')).toEqual('content__title--large');
  });

  it('render syles of label when size is giant', () =>{
    expect(component.getClassStylesLable('giant')).toEqual('content__title--giant');
  });
  //Render the class styles of label


  //Render the class styles text area
  it('render styles of textArea when size is tiny', () =>{
    expect(component.getClassStylesTextArea('tiny')).toEqual('content__input-container__input--textarea--tinycontent__input-container__input--textarea');
  });

  it('render styles of textArea when size is tiny and textMessage is diferent to "" and disabled is true', () =>{
    component.textMessage = 'Error';
    component.disabled = 'true';
    expect(component.getClassStylesTextArea('tiny')).toEqual('content__input-container__input--textarea--tinycontent__input-container__input--textarea  content__input-container__input--error content__contentTextArea--disabled');
  });
  //Render the class styles text area


  //Render function focus and focus out
  it('render function focus ', () =>{
    expect(component.focus()).toEqual('');
  });

  it('render function focus out', () =>{
    expect(component.focusOut()).toEqual('');
  });
  //Render function focus and focus out


  //Render class of styles content text area
  it('render styles context when error message is diferent to "" ', () =>{
    component.textMessage ='error test';
    expect(component.getClassStylesContentTextArea()).toEqual('content__contentTextArea--error');
  });

  it('render styles context when error message is equal to "" ', () =>{
    component.textMessage ='';
    expect(component.getClassStylesContentTextArea());
  });
  //Render class of styles content text area


  //Render the the colorText of textArea
  it('render the color text when disabled is true', () =>{
    component.disabled = 'true';
    expect(component.getColorText()).toEqual('content__contentTextArea__textArea--disabled');
  });

  it('render the color text when disabled is false', () =>{
    component.disabled = 'false';
    expect(component.getColorText());
  });
  //Render the the colorText of textArea

  
  //Render the size class of icon input
  it('render the class of icon when size is tiny', () =>{
    expect(component.getClassSizeIconRight('tiny')).toEqual(' content__input-container__icon--tiny');
  });

  it('render the class of icon when size is medium', () =>{
    expect(component.getClassSizeIconRight('medium')).toEqual(' content__input-container__icon--medium');
  });

  it('render the class of icon when size is medium', () =>{
    expect(component.getClassSizeIconRight('large')).toEqual(' content__input-container__icon--large');
  });

  it('render the class of icon when size is giant', () =>{
    expect(component.getClassSizeIconRight('giant')).toEqual(' content__input-container__icon--giant');
  });
  //Render the size class of icon input
});
