import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PackenNgModule } from 'packen-ng';

import { InputsComponent } from './inputs.component';

describe('InputsComponent', () => {
  let component: InputsComponent;
  let fixture: ComponentFixture<InputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputsComponent
      ],
      imports: [
        PackenNgModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing method testKeyUp()', () => {
    expect(component.testKeyUp('Testing input keyup')).toBeUndefined();
  });
});
