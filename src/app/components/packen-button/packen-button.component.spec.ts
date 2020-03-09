import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenButtonComponent } from './packen-button.component';
import { CUSTOM_ELEMENTS_SCHEMA, Input, } from '@angular/core';

describe('PackenButtonComponent', () => {
  let component: PackenButtonComponent;
  let fixture: ComponentFixture<PackenButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackenButtonComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Render on button click 
  it('render on button click when disables is false or other', async () => {
    component.disabled = 'false';
    expect(component.buttonClick()).toBeTrue();
  });

  it('render on button click when disabled is true', async () => {
    component.disabled = 'true';
    expect(component.buttonClick()).toBeTrue();
  });

  //Render on button  click

  //Render values of input
  it('render value default type input', async() =>{
    expect(component.type).toBeNull();
  });

  it('render value default level input', async() =>{
    expect(component.level).toBeNull();
  });

  it('render value default icon input', async() =>{
    expect(component.icon).toBeNull();
  });

  it('render value default positionIcon input', async() =>{
    expect(component.positionIcon).toBeNull();
  });

  it('render value default size input', async() =>{
    expect(component.size).toBeNull();
  });

  it('render value default disabled input', async() =>{
    expect(component.disabled).toBeNull();
  });

  it('render value default title input', async() =>{
    expect(component.title).toEqual('');
  });
  //Render values of input

  //Render on init with type of button
  it('render onInit when of type button is icon ', async () => {
    component.type = 'icon';
    expect(component.ngOnInit()).toBeUndefined();
  });

  it('render onInit when of type button is regular ', async () => {
    component.type = 'regular';
    expect(component.ngOnInit()).toBeUndefined();
  });
  //Render on init with type of button


  //Render syles icon when type of button is icon
  it('render style icon when type button is tiny', async () => {
    component.size = 'tiny';
    expect(component.loadStylesButtonsIcon()).toBeTrue();
  });

  it('render style icon when type button is small', async () => {
    component.size = 'small';
    expect(component.loadStylesButtonsIcon()).toBeTrue();
  });

  it('render style icon when type button is medium', async () => {
    component.size = 'medium';
    expect(component.loadStylesButtonsIcon()).toBeTrue();
  });

  it('render style icon when type button is large', async () => {
    component.size = 'large';
    expect(component.loadStylesButtonsIcon()).toBeTrue();
  });
  //Render syles icon when type of button is icon


  //Render levels of buttons and is disabled or not disabled
  it('render when level of button is danger and disabled is false', async () => {
    component.disabled = 'false';
    component.level = 'danger';  
    expect(component.loadLevelButton()).toBeTrue();
  });

  it('render when level of button is danger and disabled is true', async () => {
    component.disabled = 'true';
    component.level = 'danger';  
    expect(component.loadLevelButton()).toBeTrue();
  });

  it('render when level of button is ghost and disabled is false', async () => {
    component.disabled = 'false';
    component.level = 'ghost';  
    expect(component.loadLevelButton()).toBeTrue();
  });

  it('render when level of button is ghost and disabled is true', async () => {
    component.disabled = 'true';
    component.level = 'ghost';  
    expect(component.loadLevelButton()).toBeTrue();
  });

  it('render when level of button is tertiary and disabled is false', async () => {
    component.disabled = 'false';
    component.level = 'tertiary';  
    expect(component.loadLevelButton()).toBeTrue();
  });

  it('render when level of button is tertiary and disabled is true', async () => {
    component.disabled = 'true';
    component.level = 'tertiary';  
    expect(component.loadLevelButton()).toBeTrue();
  });

  it('render when level of button is secondary and disabled is false', async () => {
    component.disabled = 'false';
    component.level = 'secondary';  
    expect(component.loadLevelButton()).toBeTrue();
  });

  it('render when level of button is secondary and disabled is true', async () => {
    component.disabled = 'true';
    component.level = 'secondary';  
    expect(component.loadLevelButton()).toBeTrue();
  });

  it('render when level of button is primary and disabled is false', async () => {
    component.disabled = 'false';
    component.level = 'primary';  
    expect(component.loadLevelButton()).toBeTrue();
  });

  it('render when level of button is primary and disabled is true', async () => {
    component.disabled = 'true';
    component.level = 'primary';  
    expect(component.loadLevelButton()).toBeTrue();
  });
  //Render levels of buttons


  //Styles of regulars buttons
  it('render styles of button when size is tiny', async () => {
    component.size = 'tiny';
    expect(component.loadStylesButtonsRegular()).toBeUndefined();
  });

  it('render styles of icon button when size is small', async () => {
    component.size = 'small';
    expect(component.loadStylesButtonsRegular()).toBeUndefined();
  });

  it('render styles of icon button when size is medium', async () => {
    component.size = 'medium';
    expect(component.loadStylesButtonsRegular()).toBeUndefined();
  });

  it('render styles of icon button when size is large', async () => {
    component.size = 'large';
    expect(component.loadStylesButtonsRegular()).toBeUndefined();
  });

  it('render styles of icon button when size is giant', async () => {
    component.size = 'giant';
    expect(component.loadStylesButtonsRegular()).toBeUndefined();
  });


  //Styles of regulars buttons


  //Render margin of icons regular button
  it('render margin when type of button is regular, size is tiny and position icon is left', async () => {
    component.type = 'regular';
    component.size = 'tiny';
    component.positionIcon = 'left';
    expect(component.getMarginIcons()).toEqual({'margin-left': '10px'});
  });

  it('render margin when type of button is regular, size is tiny and position icon is left', async () => {
    component.type = 'regular';
    component.size = 'tiny';
    component.positionIcon = 'right';
    expect(component.getMarginIcons()).toEqual({'margin-right': '10px'});
  });

  it('render margin when type of button is regular, size is small and position icon is left', async () => {
    component.type = 'regular';
    component.size = 'small';
    component.positionIcon = 'left';
    expect(component.getMarginIcons()).toEqual({'margin-left': '13px'});
  });

  it('render margin when type of button is regular, size is small and position icon is right', async () => {
    component.type = 'regular';
    component.size = 'small';
    component.positionIcon = 'right';
    expect(component.getMarginIcons()).toEqual({'margin-right': '13px'});
  });

  it('render margin when type of button is regular, size is medium and position icon is left', async () => {
    component.type = 'regular';
    component.size = 'medium';
    component.positionIcon = 'left';
    expect(component.getMarginIcons()).toEqual({'margin-left': '14px'});
  });

  it('render margin when type of button is regular, size is medium and position icon is right', async () => {
    component.type = 'regular';
    component.size = 'medium';
    component.positionIcon = 'right';
    expect(component.getMarginIcons()).toEqual({'margin-right': '14px'});
  });

  it('render margin when type of button is regular, size is large and position icon is left', async () => {
    component.type = 'regular';
    component.size = 'large';
    component.positionIcon = 'left';
    expect(component.getMarginIcons()).toEqual({'margin-left': '16px'});
  });

  it('render margin when type of button is regular, size is large and position icon is right', async () => {
    component.type = 'regular';
    component.size = 'large';
    component.positionIcon = 'right';
    expect(component.getMarginIcons()).toEqual({'margin-right': '16px'});
  });

  it('render margin when type of button is regular, size is giant and position icon is right', async () => {
    component.type = 'regular';
    component.size = 'giant';
    component.positionIcon = 'left';
    expect(component.getMarginIcons()).toEqual({'margin-left': '22px'});
  });

  it('render margin when type of button is regular, size is giant and position icon is right', async () => {
    component.type = 'regular';
    component.size = 'giant';
    component.positionIcon = 'right';
    expect(component.getMarginIcons()).toEqual({'margin-right': '22px'});
  });

  it('render margin when type is other to regular', async() =>{
    component.type = 'icon';
    expect(component.getMarginIcons()).toEqual({'margin-right' : '0px'});
  });

  it('render margin when type is regular and size is other and position icon is right', () =>{
    component.type = 'regular';
    component.size = '';
    component.positionIcon = 'right';
    expect(component.getMarginIcons()).toEqual({'margin-right' : '10px'});

  });
  //Render margin of icons regular button
  
  
  //Render width icon when type button is regular
  it('render width icon when button is regular and size is tiny', async () =>{
    component.size = 'tiny';
    expect(component.getWidthIconRegular()).toEqual(15);
  });

  it('render width icon when button is regular and size is small', async () =>{
    component.size = 'small';
    expect(component.getWidthIconRegular()).toEqual(20);
  });

  it('render width icon when button is regular and size is medium', async () =>{
    component.size = 'medium';
    expect(component.getWidthIconRegular()).toEqual(23);
  });

  it('render width icon when button is regular and size is large', async () =>{
    component.size = 'large';
    expect(component.getWidthIconRegular()).toEqual(25);
  });

  it('render width icon when button is regular and size is giant', async () =>{
    component.size = 'giant';
    expect(component.getWidthIconRegular()).toEqual(30);
  });

  it('render width icon when button is regular and size is other', async () =>{
    component.size = 'other';
    expect(component.getWidthIconRegular()).toEqual(11);
  });  
  //Render width icon when type button is regular


  //Render width icon when type button is icon
  it('render width icon when type button is icon and size is tiny', async () =>{
    component.size = 'tiny';
    expect(component.getWithIcon()).toEqual(11);
  });

  it('render width icon when type button is icon and size is small', async () =>{
    component.size = 'small';
    expect(component.getWithIcon()).toEqual(16);
  });

  it('render width icon when type button is icon and size is medium', async () =>{
    component.size = 'medium';
    expect(component.getWithIcon()).toEqual(20);
  });

  it('render width icon when type button is icon and size is large', async () =>{
    component.size = 'large';
    expect(component.getWithIcon()).toEqual(24);
  });

  it('render width icon when type button is icon and size is other', async () =>{
    component.size = 'other';
    expect(component.getWithIcon()).toEqual(16);
  });
  //Render width icon when type button is icon


  //Render padding of label button
  it('render padding label button when size is tiny', async() =>{
    component.size = 'tiny';
    expect(component.getPaddingLabel()).toEqual({'margin-left': '32px', 'margin-right': '32px'});
  });

  it('render padding label button when size is small', async() => {
    component.size = 'small';
    expect(component.getPaddingLabel()).toEqual({'margin-left' : '44px', 'margin-right': '44px'});
  });

  it('render padding label button when size is medium', async() => {
    component.size = 'medium';
    expect(component.getPaddingLabel()).toEqual({'margin-left' : '46px', 'margin-right': '46px'});
  });

  it('render padding label button when size is large', async() => {
    component.size = 'large';
    expect(component.getPaddingLabel()).toEqual({'margin-left' : '56px', 'margin-right': '56px'});
  });

  it('render padding label button when size is giant', async() => {
    component.size = 'giant';
    expect(component.getPaddingLabel()).toEqual({'margin-left' : '74px', 'margin-right': '74px'});
  });

  it('render padding label button when size is other', async() => {
    component.size = 'other';
    expect(component.getPaddingLabel()).toEqual({'margin-left' : '32px', 'margin-right': '32px'});
  });
  //Render padding of label button


});
