import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenToggleComponent } from './packen-toggle.component';

describe('PackenToggleComponent', () => {
  let component: PackenToggleComponent;
  let fixture: ComponentFixture<PackenToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackenToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
