import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PackenNgModule } from 'projects/packen-ng/src/public-api';

import { PinMapComponent } from './pin-map.component';

describe('PinMapComponent', () => {
  let component: PinMapComponent;
  let fixture: ComponentFixture<PinMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PinMapComponent
      ],
      imports: [
        PackenNgModule,
      ],
    }).compileComponents();
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
