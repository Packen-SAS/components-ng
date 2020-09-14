import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenAlertComponent } from './packen-alert.component';

describe('PackenAlertComponent', () => {
  let component: PackenAlertComponent;
  let fixture: ComponentFixture<PackenAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackenAlertComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Testing function loadColors() when param is purple', () => {
    expect(component.loadColors('purple')).toBeUndefined();
  });

  it('Testing function closeIcon()', () => {
    expect(component.closeIcon()).toBeUndefined();
  });
});
