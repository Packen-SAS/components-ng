import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenDividerComponent } from './packen-divider.component';

describe('PackenDividerComponent', () => {
  let component: PackenDividerComponent;
  let fixture: ComponentFixture<PackenDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackenDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('render getHeight when divider type is dark', () =>{
    expect(component.getHeight('dark'));
  });

  it('render getHeight when divider type is light', () =>{
    expect(component.getHeight('light'));
  });

  it('render class color when divider type is dark', () =>{
    expect(component.getClassColorDivider('dark'));
  });

  it('render class color when divider type is light', () =>{
    expect(component.getClassColorDivider('light'));
  });
});
