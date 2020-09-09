import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenInputShowComponent } from './packen-input-show.component';

describe('PackenInputShowComponent', () => {
  let component: PackenInputShowComponent;
  let fixture: ComponentFixture<PackenInputShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackenInputShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenInputShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
