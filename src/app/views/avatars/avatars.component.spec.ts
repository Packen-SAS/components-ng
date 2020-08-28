import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarsComponent } from './avatars.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AvatarsComponent', () => {
  let component: AvatarsComponent;
  let fixture: ComponentFixture<AvatarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AvatarsComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('render when click in avatar image ', () => {
    expect(component.printFile()).toBeUndefined();
  });
});
