import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PackenNgModule } from 'projects/packen-ng/src/public-api';

import { RadioComponent } from './radio.component';

describe('RadioComponent', () => {
  let component: RadioComponent;
  let fixture: ComponentFixture<RadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RadioComponent
      ],
      imports: [
        PackenNgModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('render when change radio ', () => {
    component.changeRadio(1);
    expect(component.selectedItemId).toEqual(1);
  });
});
