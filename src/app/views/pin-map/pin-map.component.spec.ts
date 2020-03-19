import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinMapComponent } from './pin-map.component';

describe('PinMapComponent', () => {
  let component: PinMapComponent;
  let fixture: ComponentFixture<PinMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
