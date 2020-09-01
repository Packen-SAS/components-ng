import { SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarModule } from 'primeng';

import { PackenDateComponent } from './packen-date.component';

describe('PackenDateComponent', () => {
  let component: PackenDateComponent;
  let fixture: ComponentFixture<PackenDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PackenDateComponent
      ],
      imports: [
        CalendarModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing method ngOnChanges() when disabled property exits and it is true', () => {
    component.disabled = true;
    component.ngOnChanges({
      disabled: new SimpleChange(null, null, true)
    });
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Testing method ngOnChanges() when disabled property exits and it is false', () => {
    component.ngOnChanges({});
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Testing method getClassDisable() when disabled is true', () => {
    component.value = new Date();
    component.getClassDisable(true);
    expect(component.classDisabled).toEqual('calendar-ctn--disabled');
  });

  it('Testing method getStyleInputCalendar() when border is false', () => {
    component.border = false;
    expect(component.getStyleInputCalendar()).toBeDefined();
  });
});
