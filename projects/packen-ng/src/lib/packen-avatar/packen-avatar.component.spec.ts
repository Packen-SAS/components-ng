import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PackenAvatarComponent } from './packen-avatar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { eventAvatarMock, mockFileReader } from '../../assets/mocks/files.mock';
import { of } from 'rxjs';


describe('PackenAvatarComponent', () => {
  let component: PackenAvatarComponent;
  let fixture: ComponentFixture<PackenAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackenAvatarComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Define size avatar image
  it('Render width and height of avatar when size is tiny', () => {
    expect(component.defineSizeImage('tiny')).toBeUndefined();
  });

  it('Render width and height of avatar when size is small', () => {
    expect(component.defineSizeImage('small')).toBeUndefined();
  });

  it('Render width and height of avatar when size is medium', () => {
    expect(component.defineSizeImage('medium')).toBeUndefined();
  });

  it('Render width and height of avatar when size is large', () => {
    expect(component.defineSizeImage('large')).toBeUndefined();
  });

  it('Render width and height of avatar when size is giant', () => {
    expect(component.defineSizeImage('xlarge')).toBeUndefined();
  });

  it('Render function fileChange()', () => {
    spyOn<any>(window, 'FileReader').and.returnValue(mockFileReader);

    spyOn(mockFileReader, 'onloadend').and.callFake(() => {
      return of({ target: {} });
    });
    expect(component.fileChange(eventAvatarMock)).toBeUndefined();
  });

  it('Render function fileChange() when not has files', () => {
    const event = { target: { files: [] } };
    expect(component.fileChange(event)).toBeUndefined();
  });

  it('Testing method onClick() when value is null', () => {
    component.value = null;
    component.required = true;
    component.imageSelected = null;
    expect(component.onClick()).toBeUndefined();
  });

  it('Testing method onClick() when is not required', () => {
    component.required = false;
    component.imageSelected = component.value;
    expect(component.onClick()).toBeUndefined();
  });
});
