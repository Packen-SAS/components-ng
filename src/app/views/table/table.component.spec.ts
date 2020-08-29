import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PackenNgModule } from 'projects/packen-ng/src/public-api';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TableComponent } from './table.component';
import { ApiService } from 'src/app/services/api.service';
import { mockListShipments } from 'src/app/mocks/table.mock';
import { of } from 'rxjs';
import { TableRow } from 'projects/packen-ng/src/interfaces/table-item';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let apiService: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableComponent
      ],
      imports: [
        PackenNgModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    apiService = TestBed.inject(ApiService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing method getListFromBackend()', () => {
    expect(component.getListFromBackend(1)).toBeUndefined();
  });

  it('Testing method showSelectedRow()', () => {
    const row: TableRow = { index: 1, columns: [] };
    expect(component.showSelectedRow(row)).toBeUndefined();
  });

  it('Testing method getTotalPages()', () => {
    const listSpy = spyOn(apiService, 'getServicesList').and.callFake(() => {
      return of(mockListShipments);
    });

    expect(component.getTotalPages()).toBeUndefined();
    expect(component.requestDone).toBeTruthy();
    expect(listSpy).toHaveBeenCalled();
  });

  it('Testing method getServicesList()', () => {
    const listSpy = spyOn(apiService, 'getServicesList').and.callFake(() => {
      return of(mockListShipments);
    });

    expect(component.getServicesList('1')).toBeUndefined();
    expect(listSpy).toHaveBeenCalled();
  });
});
