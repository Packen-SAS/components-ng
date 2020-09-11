import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenInputShowDropdownComponent } from './packen-dropdown-show.component';

describe('PackenDropdownShowComponent', () => {
  let component: PackenInputShowDropdownComponent;
  let fixture: ComponentFixture<PackenInputShowDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackenInputShowDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenInputShowDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
