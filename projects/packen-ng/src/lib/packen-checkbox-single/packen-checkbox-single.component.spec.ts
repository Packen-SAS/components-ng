import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenCheckboxSingleComponent } from './packen-checkbox-single.component';

describe('PackenCheckboxSingleComponent', () => {
  let component: PackenCheckboxSingleComponent;
  let fixture: ComponentFixture<PackenCheckboxSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackenCheckboxSingleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenCheckboxSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing function ngOnInit() when isset a value', () => {
    component.value = 'checked';
    expect(component.ngOnInit()).toBeUndefined();
  });

  it('Testing function checkedUncheckBox() when value es checked', () => {
    component.value = 'checked';
    expect(component.checkedUncheckBox()).toBeUndefined();
  });

  it('Testing function checkedUncheckBox() when value es unchecked', () => {
    component.value = 'unchecked';
    expect(component.checkedUncheckBox()).toBeUndefined();
  });
});
