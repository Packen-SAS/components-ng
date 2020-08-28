import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PackenNgModule } from 'projects/packen-ng/src/public-api';

import { TabsComponent } from './tabs.component';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TabsComponent
      ],
      imports: [
        PackenNgModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('render function when change id tab', () => {
    component.changeTab(1);
    expect(component.activeTabId).toEqual(1);
  });
});
