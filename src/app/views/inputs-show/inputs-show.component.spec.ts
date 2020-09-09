import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsShowComponent } from './inputs-show.component';

describe('InputsShowComponent', () => {
  let component: InputsShowComponent;
  let fixture: ComponentFixture<InputsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
