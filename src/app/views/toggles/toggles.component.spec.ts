import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglesComponent } from './toggles.component';
import { ToggleItem } from 'src/app/interfaces/toggle-item';

describe('TogglesComponent', () => {
  let component: TogglesComponent;
  let fixture: ComponentFixture<TogglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TogglesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TogglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('render changeToggle in component emit change', () => {
    let objToggle: ToggleItem = { id: 1, status: 'unchecked', disabled: false, onLabel: 'ON', offLabel: 'Of' }
    component.toggles = [
      { id: 1, status: 'checked', disabled: false, onLabel: 'Si', offLabel: 'No' },
      { id: 2, status: 'unchecked', disabled: false, onLabel: 'On', offLabel: 'Off' }
    ]
    expect(component.changeToggle(objToggle)).toBeUndefined();
  });
});
