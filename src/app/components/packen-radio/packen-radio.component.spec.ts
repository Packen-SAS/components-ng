import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenRadioComponent } from './packen-radio.component';

describe('PackenRadioComponent', () => {
  let component: PackenRadioComponent;
  let fixture: ComponentFixture<PackenRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackenRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
