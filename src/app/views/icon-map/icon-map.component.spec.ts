import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMapComponent } from './icon-map.component';

describe('IconMapComponent', () => {
  let component: IconMapComponent;
  let fixture: ComponentFixture<IconMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
