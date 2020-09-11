import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsShowDropdownComponent } from './dropdowns-show.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DropdownsShowComponent', () => {
  let component: InputsShowDropdownComponent;
  let fixture: ComponentFixture<InputsShowDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputsShowDropdownComponent ],
      imports:[
        HttpClientTestingModule
      ],
      schemas:[
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsShowDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
