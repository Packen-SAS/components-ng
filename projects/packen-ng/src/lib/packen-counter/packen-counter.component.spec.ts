import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PackenCounterComponent } from './packen-counter.component';

describe('PackenCounterComponent', () => {
  let component: PackenCounterComponent;
  let fixture: ComponentFixture<PackenCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackenCounterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing function addObStractValue when action is add', () => {
    component.max = 10;
    expect(component.addOrSubtractValue('add')).toBeUndefined();
  });

  it('Testing function addObStractValue when action is add but not isset max', () => {
    expect(component.addOrSubtractValue('add')).toBeUndefined();
  });

  it('Testing function addObStractValue when action is add but isset max and value', () => {
    component.value = 5;
    component.max = 10;
    expect(component.addOrSubtractValue('add')).toBeUndefined();
  });

  it('Testing function addObStractValue when action is subtrackt', () => {
    component.min = 1;
    expect(component.addOrSubtractValue('subtrackt')).toBeUndefined();
  });

  it('Testing function addObStractValue when action is subtrackt but not isset min', () => {
    expect(component.addOrSubtractValue('subtrackt')).toBeUndefined();
  });

  it('Testing function addObStractValue when action is subtrackt but isset max and value', () => {
    component.value = 5;
    component.min = 1;
    expect(component.addOrSubtractValue('subtrackt')).toBeUndefined();
  });
});
