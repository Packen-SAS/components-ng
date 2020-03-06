import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenButtonComponent } from './packen-button.component';

describe('PackenButtonComponent', () => {
  let component: PackenButtonComponent;
  let fixture: ComponentFixture<PackenButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackenButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
