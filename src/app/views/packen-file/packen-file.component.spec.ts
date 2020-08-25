import { SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PackenFileComponent } from './packen-file.component';

describe('PackenFileComponent', () => {
  let component: PackenFileComponent;
  let fixture: ComponentFixture<PackenFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PackenFileComponent
      ],
      imports: [
        FormsModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing method ngOnChanges() when disabled property does not exit', () => {
    component.ngOnChanges({
      other: new SimpleChange(null, null, true)
    });
    fixture.detectChanges();
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
    component.disabled = false;
    component.ngOnChanges({
      disabled: new SimpleChange(null, null, true)
    });
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Testing method set value()', () => {
    component.value = 'some file';
    expect(component).toBeTruthy();
  });

  it('Testing method getClassStylesBox() when size is tiny', () => {
    component.getClassStylesBox('tiny');
    expect(component.classInput).toEqual('box-file__size--tiny');
  });

  it('Testing method getClassStylesBox() when size is small', () => {
    component.getClassStylesBox('small');
    expect(component.classInput).toEqual('box-file__size--small');
  });

  it('Testing method getClassStylesBox() when size is medium', () => {
    component.getClassStylesBox('medium');
    expect(component.classInput).toEqual('box-file__size--medium');
  });

  it('Testing method getClassStylesBox() when size is large', () => {
    component.getClassStylesBox('large');
    expect(component.classInput).toEqual('box-file__size--large');
  });

  it('Testing method getClassStylesBox() when size is giant', () => {
    component.getClassStylesBox('giant');
    expect(component.classInput).toEqual('box-file__size--giant');
  });
});
