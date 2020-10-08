import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PackenPinMapComponent } from './packen-pin-map.component';
import { ColorContentIcon, PositionContentIcon, TypeColor, TypePointPosition, IconColorStyles, ContentColor, ContentDirection, TypeIconPosition, ClassLabelStyles, PositionPointStyle } from './packen-pin-map.component';

describe('PackenPinMapComponent', () => {
  let component: PackenPinMapComponent;
  let fixture: ComponentFixture<PackenPinMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PackenPinMapComponent
      ],
      imports: [
        FormsModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenPinMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Testing method getClassIconBox()', () => {
    it('When type is refresh and dotPosition is bottom', () => {
      component.type = TypeColor.refresh;
      component.dotPosition = TypePointPosition.bottom;
      expect(component.getClassIconBox()).toEqual(ColorContentIcon.refresh + ' ' + PositionContentIcon.top);
    });

    it('When type is refresh and dotPosition is top', () => {
      component.type = TypeColor.refresh;
      component.dotPosition = TypePointPosition.top;
      expect(component.getClassIconBox()).toEqual(ColorContentIcon.refresh + ' ' + PositionContentIcon.bottom);
    });

    it('When type is refresh and dotPosition is right', () => {
      component.type = TypeColor.refresh;
      component.dotPosition = TypePointPosition.right;
      expect(component.getClassIconBox()).toEqual(ColorContentIcon.refresh + ' ' + PositionContentIcon.left);
    });
  });

  describe('Testing method getColorIcon()', () => {
    it('When type is refresh', () => {
      component.type = TypeColor.refresh;
      expect(component.getColorIcon()).toEqual(IconColorStyles.refresh);
    });

    it('When type is default', () => {
      component.type = TypeColor.default;
      expect(component.getColorIcon()).toEqual(IconColorStyles.default);
    });
  });

  describe('Testing method getClassAddress()', () => {
    it('When type is active and iconPosition is right', () => {
      component.type = TypeColor.active;
      component.iconPosition = TypeIconPosition.right;
      expect(component.getClassAddress()).toEqual(ContentColor.active + ' ' + ContentDirection.left);
    });

    it('When type is active and iconPosition is left', () => {
      component.type = TypeColor.active;
      component.iconPosition = TypeIconPosition.left;
      expect(component.getClassAddress()).toEqual(ContentColor.active + ' ' + ContentDirection.right);
    });

    it('When type is default and iconPosition is right', () => {
      component.type = TypeColor.default;
      component.iconPosition = TypeIconPosition.right;
      expect(component.getClassAddress()).toEqual(ContentColor.default + ' ' + ContentDirection.left);
    });
  });

  describe('Testing method getClassLabel()', () => {
    it('When type is active', () => {
      component.type = TypeColor.active;
      expect(component.getClassLabel()).toEqual(ClassLabelStyles.active);
    });

    it('When type is default', () => {
      component.type = TypeColor.default;
      expect(component.getClassLabel()).toEqual(ClassLabelStyles.default);
    });
  });

  describe('Testing method getClassPointPosition()', () => {
    it('When dotPosition is left', () => {
      component.dotPosition = TypePointPosition.left;
      expect(component.getClassPointPosition()).toEqual(PositionPointStyle.left);
    });

    it('When dotPosition is top', () => {
      component.dotPosition = TypePointPosition.top;
      expect(component.getClassPointPosition()).toEqual(PositionPointStyle.top);
    });

    it('When dotPosition is bottom', () => {
      component.dotPosition = TypePointPosition.bottom;
      expect(component.getClassPointPosition()).toEqual(PositionPointStyle.bottom);
    });

    it('When dotPosition is right', () => {
      component.dotPosition = TypePointPosition.right;
      expect(component.getClassPointPosition()).toEqual(PositionPointStyle.right);
    });
  });
});
