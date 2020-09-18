import { SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenInputShowComponent } from './packen-input-show.component';

describe('PackenInputShowComponent', () => {
  let component: PackenInputShowComponent;
  let fixture: ComponentFixture<PackenInputShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackenInputShowComponent]
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
    expect(component.getBackgroundClass()).toEqual('cnt--phantom');
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
});
