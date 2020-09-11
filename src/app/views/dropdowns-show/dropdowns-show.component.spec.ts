import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsShowDropdownComponent } from './dropdowns-show.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { of } from 'rxjs';
import { epsListMock } from 'src/app/mocks/dropdowns.mock';

describe('DropdownsShowComponent', () => {
  let component: InputsShowDropdownComponent;
  let fixture: ComponentFixture<InputsShowDropdownComponent>;
  let api: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputsShowDropdownComponent],
      imports: [
        HttpClientTestingModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsShowDropdownComponent);
    component = fixture.componentInstance;
    api = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing function keyUpDropdown()', () => {
    const spyListHealtEntities = spyOn(api, 'getListHealtEntities').and.callFake(() => {
      return of(epsListMock);
    });
    expect(component.keyUpDropdown('f'));
    expect(spyListHealtEntities).toHaveBeenCalled();
  });

  it('Testing function keyUpDropdown()', () => {
    epsListMock.success = false;
    const spyListHealtEntities = spyOn(api, 'getListHealtEntities').and.callFake(() => {
      return of(epsListMock);
    });
    expect(component.keyUpDropdown('f'));
    expect(spyListHealtEntities).toHaveBeenCalled();
  });
});
