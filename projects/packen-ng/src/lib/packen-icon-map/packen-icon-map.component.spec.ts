import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenIconMapComponent } from './packen-icon-map.component';

describe('PackenIconMapComponent', () => {
  let component: PackenIconMapComponent;
  let fixture: ComponentFixture<PackenIconMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackenIconMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenIconMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
