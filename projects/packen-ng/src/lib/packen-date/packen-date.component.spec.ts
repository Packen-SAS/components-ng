import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenDateComponent } from './packen-date.component';

describe('PackenDateComponent', () => {
  let component: PackenDateComponent;
  let fixture: ComponentFixture<PackenDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackenDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
