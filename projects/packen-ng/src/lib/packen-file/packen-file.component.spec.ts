import { SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { eventFileMock } from '../../assets/mocks/files.mock';

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
    const arrayOfBlob = new Array<Blob>();
    component.value = new File(arrayOfBlob, 'Mock.zip', { type: 'application/zip' });
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

  it('Testing method onClick() when value is null', () => {
    component.value = null;
    component.required = true;
    component.selectedFile = null;
    expect(component.onClick()).toBeUndefined();
  });

  it('Testing method onClick() when is not required', () => {
    component.required = false;
    component.selectedFile = component.value;
    expect(component.onClick()).toBeUndefined();
  });

  it('Testing method fileChange()', () => {
    expect(component.fileChange(eventFileMock)).toBeUndefined();
  });

  it('Testing method fileChange() when file is not selected', () => {
    const eventMock = eventFileMock;
    eventMock.target.files = [];
    expect(component.fileChange(eventMock)).toBeUndefined();
  });

  it('Testing function loadSizeTitle()', () => {
    component.fontSizeTitle = 18;
    expect(component.loadSizeTitle()).toBeUndefined();
  });

  it('Testing function loadBoldTitle()', () => {
    component.boldTitle = false;
    expect(component.loadBoldTitle()).toBeUndefined();
  });

  it('Testing function validateOpacityRequired()', () => {
    component.value = null;
    component.opacityRequired = true;
    expect(component.validateOpacityRequired()).toEqual('box-file__content--opacity');
  });
});
