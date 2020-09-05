import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
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
        FormsModule,
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

  it('Testing method disable() when is false', () => {
    component.disabledRadio = false;
    component.disable();
    expect(component.disabledRadio).toBeTruthy();
  });

  it('Testing method disable() when is true', () => {
    component.disabledRadio = true;
    component.disable();
    expect(component.disabledRadio).toBeFalsy();
  });
});
