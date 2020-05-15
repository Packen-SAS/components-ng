import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenAvatarComponent } from './packen-avatar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



describe('PackenAvatarComponent', () => {
  let component: PackenAvatarComponent;
  let fixture: ComponentFixture<PackenAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackenAvatarComponent ],
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

  it('Render when click in image', () =>{
    expect(component.clickImage()).toBeUndefined();
  });

  //Define size avatar image
  it('Render width and height of avatar when size is tiny', () =>{
    expect(component.defineSizeImage('tiny')).toEqual(32);
  });

  it('Render width and height of avatar when size is small', () =>{
    expect(component.defineSizeImage('small')).toEqual(40);
  });

  it('Render width and height of avatar when size is medium', () =>{
    expect(component.defineSizeImage('medium')).toEqual(64);
  });

  it('Render width and height of avatar when size is large', () =>{
    expect(component.defineSizeImage('large')).toEqual(80);
  });

  it('Render width and height of avatar when size is giant', () =>{
    expect(component.defineSizeImage('xlarge')).toEqual(96);
  });
  //Define size avatar image
});
