import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';
import { CheckItem } from 'src/app/interfaces/check-item';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('render when change state of checkbox ', () =>{
    let check:CheckItem={id: 1, disabled: false, state: 'checked', label: 'Label'};
    expect(component.changeStateCheckBox(check)).toBeUndefined();
  });

});

