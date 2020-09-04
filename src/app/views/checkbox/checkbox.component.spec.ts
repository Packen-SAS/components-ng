import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PackenNgModule } from 'packen-ng';
import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckboxComponent
      ],
      imports: [
        PackenNgModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing checkbox changeCheckBox()', () => {
    const mockCheckbox = [
      {
        id: 1, label: 'Label 1',
        state: 'checked', disabled: false
      },
      {
        id: 2, label: 'Label 2',
        state: 'checked', disabled: false
      }];

    expect(component.changeCheckBox(mockCheckbox)).toBeUndefined();
  });
});
