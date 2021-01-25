import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenRatingComponent } from './packen-rating.component';

describe('PackenRatingComponent', () => {
  let component: PackenRatingComponent;
  let fixture: ComponentFixture<PackenRatingComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PackenRatingComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing function ngOnInit() when isset a value', () => {
    component.value = 3;
    component.numberStarts = 5;
    expect(component.ngOnInit()).toBeUndefined();
  });

  it('Testing function loadStylesStart() when is readonly', () => {
    component.readonly = true;
    expect(component.loadStylesStart()).toBeUndefined();
  });

  it('Testing function removeColorStar()', () => {
    component.hovered = true;
    component.value = 3;
    expect(component.removeColorStar()).toBeUndefined();
  });

  it('Testing function removeColorStar() when is hovered ando not isset a value', () => {
    component.hovered = true;
    component.readonly = true;
    expect(component.removeColorStar()).toBeUndefined();
  });

  it('Testing function removeColorStar() when not is hovered', () => {
    component.hovered = false;
    expect(component.removeColorStar()).toBeUndefined();
  });

  it('Testing function selectStartValue()', () => {
    expect(component.selectStarValue(2)).toBeUndefined();
  });

  it('Testing function selectStartValue() when  is readonly', () => {
    component.readonly = true;
    expect(component.selectStarValue(2)).toBeUndefined();
  });
});
