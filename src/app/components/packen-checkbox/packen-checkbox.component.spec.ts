import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenCheckboxComponent } from './packen-checkbox.component';

describe('PackenCheckboxComponent', () => {
  let component: PackenCheckboxComponent;
  let fixture: ComponentFixture<PackenCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackenCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
