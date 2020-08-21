import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PackenAvatarComponent } from './packen-avatar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('PackenAvatarComponent', () => {
  let component: PackenAvatarComponent;
  let fixture: ComponentFixture<PackenAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackenAvatarComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Define size avatar image
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
    let event = {
      target: {
        files: [
          {
            lastModified: 1597957404004,
            lastModifiedDate: new Date(),
            name: 'Screenshot from 2020-10-10',
            size: 41707,
            type: 'image/png',
            webkitRelativePath: ""
          }
        ]
      }
    };
    component.value = {};

    let temporaly = component.value;
    let mockFileReader = {
      target: { result: '' },
      readAsDataURL: (blobInput) => { },
      onloadend: (value) => { }
    };

    spyOn<any>(window, 'FileReader').and.returnValue(mockFileReader);

    spyOn(mockFileReader, 'onloadend').and.callFake(() => {
      return of({ target: {} })
    });
    expect(component.fileChange(event)).toBeUndefined();
  });

  it('Render function fileChange() when not has files', () => {
    let event = { target: { files: [] } };
    expect(component.fileChange(event)).toBeUndefined();
  });
});
