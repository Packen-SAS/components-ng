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

  it('Testing function clickSeeButton()', () => {
    expect(component.clickSeeButton()).toBeUndefined();
  });

  it('Testing function clickEditButton()', () => {
    expect(component.clickEditButton()).toBeUndefined();
  });
});