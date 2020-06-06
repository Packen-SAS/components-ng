import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenTableComponent } from './packen-table.component';

describe('PackenTableComponent', () => {
  let component: PackenTableComponent;
  let fixture: ComponentFixture<PackenTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackenTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
