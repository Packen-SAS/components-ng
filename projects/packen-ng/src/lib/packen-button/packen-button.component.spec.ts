import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenButtonComponent } from './packen-button.component';
import { CUSTOM_ELEMENTS_SCHEMA, SimpleChange } from '@angular/core';

describe('PackenButtonComponent', () => {
  let component: PackenButtonComponent;
  let fixture: ComponentFixture<PackenButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackenButtonComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Render on button click
  it('render on button click when disables is false or other', () => {
    component.disabled = false;
    expect(component.buttonClick()).toBeTrue();
  });

  it('render on button click when disabled is true', () => {
    component.disabled = true;
    expect(component.buttonClick()).toBeTrue();
  });

  // Render values of input
  it('render value default type input', () => {
    expect(component.type).toBeNull();
  });

  it('render value default level input', () => {
    expect(component.level).toBeNull();
  });

  it('render value default icon input', () => {
    expect(component.icon).toBeNull();
  });

  it('render value default positionIcon input', () => {
    expect(component.positionIcon).toBeNull();
  });

  it('render value default size input', () => {
    expect(component.size).toBeNull();
  });

  it('render value default disabled input', () => {
    expect(component.disabled).toBeNull();
  });

  it('render value default title input', () => {
    expect(component.title).toEqual('');
  });

  // Render on init with type of button
  it('render onInit when of type button is icon ', () => {
    component.type = 'icon';
    expect(component.ngOnInit()).toBeUndefined();
  });

  it('render onInit when of type button is regular ', () => {
    component.type = 'regular';
    expect(component.ngOnInit()).toBeUndefined();
  });

  // Render syles icon when type of button is icon
  it('render style icon when type button is tiny', () => {
    component.size = 'tiny';
    expect(component.loadStylesButtonsIcon()).toBeTrue();
  });

  it('render style icon when type button is small', () => {
    component.size = 'small';
    expect(component.loadStylesButtonsIcon()).toBeTrue();
  });

  it('render style icon when type button is medium', () => {
    component.size = 'medium';
    expect(component.loadStylesButtonsIcon()).toBeTrue();
  });

  it('render style icon when type button is large', () => {
    component.size = 'large';
    expect(component.loadStylesButtonsIcon()).toBeTrue();
  });

  // Render levels of buttons and is disabled or not disabled
  it('render when level of button is danger and disabled is false', () => {
    component.disabled = false;
    component.level = 'danger';
    expect(component.loadLevelButton()).toBeTrue();
  });

  it('render when level of button is danger and disabled is true', () => {
    component.disabled = true;
    component.level = 'danger';
    expect(component.loadLevelButton()).toBeTrue();
  });

  it('render when level of button is ghost and disabled is false', () => {
    component.disabled = false;
    component.level = 'ghost';
    expect(component.loadLevelButton()).toBeTrue();
  });

  it('render when level of button is ghost and disabled is true', () => {
    component.disabled = true;
    component.level = 'ghost';
    expect(component.loadLevelButton()).toBeTrue();
  });

  it('render when level of button is tertiary and disabled is false', () => {
    component.disabled = false;
    component.level = 'tertiary';
    expect(component.loadLevelButton()).toBeTrue();
  });

  it('render when level of button is tertiary and disabled is true', () => {
    component.disabled = true;
    component.level = 'tertiary';
    expect(component.loadLevelButton()).toBeTrue();
  });

  it('render when level of button is secondary and disabled is false', () => {
    component.disabled = false;
    component.level = 'secondary';
    expect(component.loadLevelButton()).toBeTrue();
  });

  it('render when level of button is secondary and disabled is true', () => {
    component.disabled = true;
    component.level = 'secondary';
    expect(component.loadLevelButton()).toBeTrue();
  });

  it('render when level of button is primary and disabled is false', () => {
    component.disabled = false;
    component.level = 'primary';
    expect(component.loadLevelButton()).toBeTrue();
  });

  it('render when level of button is primary and disabled is true', () => {
    component.disabled = true;
    component.level = 'primary';
    expect(component.loadLevelButton()).toBeTrue();
  });

  it('render when level of button is primary and disabled is true', () => {
    component.disabled = true;
    component.level = 'ghost-outline';
    expect(component.loadLevelButton()).toBeTrue();
  });

  it('render when level of button is primary and disabled is false', () => {
    component.disabled = false;
    component.level = 'ghost-outline';
    expect(component.loadLevelButton()).toBeTrue();
  });

  // Styles of regulars buttons
  it('render styles of button when size is tiny', () => {
    component.size = 'tiny';
    expect(component.loadStylesButtonsRegular()).toBeUndefined();
  });

  it('render styles of icon button when size is small', () => {
    component.size = 'small';
    expect(component.loadStylesButtonsRegular()).toBeUndefined();
  });

  it('render styles of icon button when size is medium', () => {
    component.size = 'medium';
    expect(component.loadStylesButtonsRegular()).toBeUndefined();
  });

  it('render styles of icon button when size is large', () => {
    component.size = 'large';
    expect(component.loadStylesButtonsRegular()).toBeUndefined();
  });

  it('render styles of icon button when size is giant', () => {
    component.size = 'giant';
    expect(component.loadStylesButtonsRegular()).toBeUndefined();
  });

  // Render margin of icons regular button
  it('render margin when type of button is regular, size is tiny and position icon is left', () => {
    component.type = 'regular';
    component.size = 'tiny';
    component.positionIcon = 'left';
    expect(component.getMarginIcons()).toEqual({ 'margin-left': '10px' });
  });

  it('render margin when type of button is regular, size is tiny and position icon is left', () => {
    component.type = 'regular';
    component.size = 'tiny';
    component.positionIcon = 'right';
    expect(component.getMarginIcons()).toEqual({ 'margin-right': '10px' });
  });

  it('render margin when type of button is regular, size is small and position icon is left', () => {
    component.type = 'regular';
    component.size = 'small';
    component.positionIcon = 'left';
    expect(component.getMarginIcons()).toEqual({ 'margin-left': '13px' });
  });

  it('render margin when type of button is regular, size is small and position icon is right', () => {
    component.type = 'regular';
    component.size = 'small';
    component.positionIcon = 'right';
    expect(component.getMarginIcons()).toEqual({ 'margin-right': '13px' });
  });

  it('render margin when type of button is regular, size is medium and position icon is left', () => {
    component.type = 'regular';
    component.size = 'medium';
    component.positionIcon = 'left';
    expect(component.getMarginIcons()).toEqual({ 'margin-left': '14px' });
  });

  it('render margin when type of button is regular, size is medium and position icon is right', () => {
    component.type = 'regular';
    component.size = 'medium';
    component.positionIcon = 'right';
    expect(component.getMarginIcons()).toEqual({ 'margin-right': '14px' });
  });

  it('render margin when type of button is regular, size is large and position icon is left', () => {
    component.type = 'regular';
    component.size = 'large';
    component.positionIcon = 'left';
    expect(component.getMarginIcons()).toEqual({ 'margin-left': '16px' });
  });

  it('render margin when type of button is regular, size is large and position icon is right', () => {
    component.type = 'regular';
    component.size = 'large';
    component.positionIcon = 'right';
    expect(component.getMarginIcons()).toEqual({ 'margin-right': '16px' });
  });

  it('render margin when type of button is regular, size is giant and position icon is right', () => {
    component.type = 'regular';
    component.size = 'giant';
    component.positionIcon = 'left';
    expect(component.getMarginIcons()).toEqual({ 'margin-left': '22px' });
  });

  it('render margin when type of button is regular, size is giant and position icon is right', () => {
    component.type = 'regular';
    component.size = 'giant';
    component.positionIcon = 'right';
    expect(component.getMarginIcons()).toEqual({ 'margin-right': '22px' });
  });

  it('render margin when type is other to regular', () => {
    component.type = 'icon';
    expect(component.getMarginIcons()).toEqual({ 'margin-right': '0px' });
  });

  it('render margin when type is regular and size is other and position icon is right', () => {
    component.type = 'regular';
    component.size = '';
    component.positionIcon = 'right';
    expect(component.getMarginIcons()).toEqual({ 'margin-right': '10px' });

  });

  // Render width icon when type button is regular
  it('render width icon when button is regular and size is tiny', () => {
    component.size = 'tiny';
    expect(component.getWidthIconRegular()).toEqual(15);
  });

  it('render width icon when button is regular and size is small', () => {
    component.size = 'small';
    expect(component.getWidthIconRegular()).toEqual(20);
  });

  it('render width icon when button is regular and size is medium', () => {
    component.size = 'medium';
    expect(component.getWidthIconRegular()).toEqual(23);
  });

  it('render width icon when button is regular and size is large', () => {
    component.size = 'large';
    expect(component.getWidthIconRegular()).toEqual(25);
  });

  it('render width icon when button is regular and size is giant', () => {
    component.size = 'giant';
    expect(component.getWidthIconRegular()).toEqual(30);
  });

  it('render width icon when button is regular and size is other', () => {
    component.size = 'other';
    expect(component.getWidthIconRegular()).toEqual(11);
  });

  // Render width icon when type button is icon
  it('render width icon when type button is icon and size is tiny', () => {
    component.size = 'tiny';
    expect(component.getWithIcon()).toEqual(11);
  });

  it('render width icon when type button is icon and size is small', () => {
    component.size = 'small';
    expect(component.getWithIcon()).toEqual(16);
  });

  it('render width icon when type button is icon and size is medium', () => {
    component.size = 'medium';
    expect(component.getWithIcon()).toEqual(20);
  });

  it('render width icon when type button is icon and size is large', () => {
    component.size = 'large';
    expect(component.getWithIcon()).toEqual(24);
  });

  it('render width icon when type button is icon and size is other', () => {
    component.size = 'other';
    expect(component.getWithIcon()).toEqual(16);
  });

  it('Testing method ngOnChanges() when items change the property', () => {
    component.ngOnChanges({
      disabled: new SimpleChange(null, null, true)
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

  it('Testing function loadMinWidthButton() when isset a value', () => {
    component.minWidth = 100;
    expect(component.loadMinWidthButton()).toBeUndefined();
  });

  it('Testing function loadMinWidthButton() when not isset a value', () => {
    component.minWidth = null;
    expect(component.loadMinWidthButton()).toBeUndefined();
  });


});
