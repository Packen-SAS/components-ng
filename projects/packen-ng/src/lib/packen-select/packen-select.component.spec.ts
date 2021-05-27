import { SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PackenSelectComponent } from './packen-select.component';
import { selectListMock } from '../../assets/mocks/select.mock';

describe('PackenSelectComponent', () => {
  let component: PackenSelectComponent;
  let fixture: ComponentFixture<PackenSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PackenSelectComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing method ngOnChanges() when disabled property does not exit', () => {
    component.ngOnChanges({});
    fixture.detectChanges();
    expect(component).toBeDefined();
  });

  it('Testing method ngOnChanges() when disabled property exits and selected id is 1', () => {
    component.selectedId = 1;
    component.items = selectListMock;
    component.ngOnChanges({
      disabled: new SimpleChange(null, true, null)
    });
    fixture.detectChanges();
    expect(component).toBeDefined();
  });

  it('Testing method ngOnChanges() when disabled property exits and selected id is null', () => {
    component.selectedId = null;
    component.ngOnChanges({
      disabled: new SimpleChange(null, true, null)
    });
    fixture.detectChanges();
    expect(component).toBeDefined();
  });

  it('Testing method ngOnChanges() when selectedId property exits', () => {
    component.selectedId = null;
    component.ngOnChanges({
      selectedId: new SimpleChange(null, true, null)
    });
    fixture.detectChanges();
    expect(component).toBeDefined();
  });

  it('Testing method getItemClass() when disabled is true', () => {
    component.disabled = true;
    expect(component.getItemClass(selectListMock[0])).toBeDefined();
  });

  it('Testing method getItemClass() when boldBorder is true', () => {
    component.disabled = true;
    component.boldBorder = true;
    expect(component.getItemClass(selectListMock[0])).toBeDefined();
  });

  it('Testing method getItemClass() when grayBack is true', () => {
    component.disabled = true;
    component.grayBack = true;
    expect(component.getItemClass(selectListMock[1])).toBeDefined();
  });

  it('Testing method selectOption() when allowSelect is true', () => {
    component.allowSelect = true;
    expect(component.selectOption(selectListMock[0])).toBeUndefined();
  });

  it('Testing method selectOption() when allowSelect is false', () => {
    component.allowSelect = false;
    expect(component.selectOption(selectListMock[0])).toBeUndefined();
  });

  it('Testing method loadDimensions()', () => {
    component.width = 95;
    component.height = 56;
    expect(component.loadDimensions()).toBeUndefined();
  });

  it('Testing method loadDimensions() when font-size exits', () => {
    component.width = 95;
    component.height = 56;
    component.fontSize = 14;
    expect(component.loadDimensions()).toBeUndefined();
  });

  it('Testing method loadDimensions() when icon-size exits', () => {
    component.width = 95;
    component.height = 56;
    component.iconSize = 14;
    expect(component.loadDimensions()).toBeUndefined();
  });

  it('Testing function getItemClass when isset the property outline', () => {
    component.outline = true;
    expect(component.getItemClass(selectListMock[0])).toBeDefined();
  });

  it('Testing method loadDimensions() when icon-size exits and when isset propery fulWidth', () => {
    component.width = 95;
    component.height = 56;
    component.iconSize = 14;
    component.fullWidth = true;
    expect(component.loadDimensions()).toBeUndefined();
  });

  it('Testing method unselectAllOptions()', () => {
    component.items = selectListMock;
    expect(component.unselectAllOptions()).toBeUndefined();
  });
});
