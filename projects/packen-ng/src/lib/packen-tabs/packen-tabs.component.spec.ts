import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenTabsComponent } from './packen-tabs.component';

describe('PackenTabsComponent', () => {
  let component: PackenTabsComponent;
  let fixture: ComponentFixture<PackenTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackenTabsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('render onClick tab', () => {
    expect(component.clickTab(1)).toBeUndefined();
  });
});
