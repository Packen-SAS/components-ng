import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PackenNgModule } from 'packen-ng';
import { of } from 'rxjs';
import { epsListMock } from 'src/app/mocks/dropdowns.mock';
import { ApiService } from 'src/app/services/api.service';

import { DropdownsComponent } from './dropdowns.component';

describe('DropdownsComponent', () => {
  let component: DropdownsComponent;
  let fixture: ComponentFixture<DropdownsComponent>;
  let apiService: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DropdownsComponent
      ],
      imports: [
        PackenNgModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownsComponent);
    apiService = TestBed.inject(ApiService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('render function when exec function changeItemMenu1 ', () => {
    expect(component.changeItemMenu1(1)).toBeUndefined();
  });

  it('render function when exec function changeItemMenu2 ', () => {
    expect(component.changeItemMenu2(1)).toBeUndefined();
  });

  it('render function when exec function changeItemMenu3 ', () => {
    expect(component.changeItemMenu3(1)).toBeUndefined();
  });

  it('render function when change checkbox ', () => {
    const objCheck = { id: 1, label: 'Label 1', state: 'checked', disabled: false };

    component.checkboxes = [{ id: 1, label: 'Label 1', state: 'checked', disabled: false },
    { id: 2, label: 'Label 2', state: 'checked', disabled: true },
    { id: 3, label: 'Label 3', state: 'unchecked', disabled: true }];

    expect(component.changeCheckbox(objCheck)).toBeUndefined();
  });

  it('render when exect function change radio', () => {
    expect(component.changeRadio(2)).toBeUndefined();
  });

  it('Testing method keyUpDropdown()', () => {
    const listSpy = spyOn(apiService, 'getListHealtEntities').withArgs('eps').and.callFake(() => {
      return of(epsListMock);
    });
    expect(component.keyUpDropdown('eps')).toBeUndefined();
    expect(listSpy).toHaveBeenCalled();
  });
});
