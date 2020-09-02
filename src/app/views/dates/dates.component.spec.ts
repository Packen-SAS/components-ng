import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PackenNgModule } from 'projects/packen-ng/src/public-api';
import { DatesComponent } from './dates.component';

describe('DatesComponent', () => {
  let component: DatesComponent;
  let fixture: ComponentFixture<DatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DatesComponent
      ],
      imports: [
        FormsModule,
        PackenNgModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing method disable() when is false', () => {
    component.disabledDate = false;
    component.disable();
    expect(component.disabledDate).toBeTruthy();
  });

  it('Testing method disable() when is true', () => {
    component.disabledDate = true;
    component.disable();
    expect(component.disabledDate).toBeFalsy();
  });

  it('Testing method printDate()', () => {
    expect(component.printDate()).toBeUndefined();
  });
});
