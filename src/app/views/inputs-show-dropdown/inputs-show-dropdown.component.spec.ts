import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsShowDropdownComponent } from './inputs-show-dropdown.component';

describe('InputsShowDropdownComponent', () => {
  let component: InputsShowDropdownComponent;
  let fixture: ComponentFixture<InputsShowDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputsShowDropdownComponent ]
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
