import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PackenNgModule } from 'projects/packen-ng/src/public-api';
import { selectItemMock } from 'src/app/mocks/select.mock';
import { SelectsComponent } from './selects.component';

describe('SelectsComponent', () => {
  let component: SelectsComponent;
  let fixture: ComponentFixture<SelectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SelectsComponent
      ],
      imports: [
        FormsModule,
        PackenNgModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing method setSelectedOption()', () => {
    expect(component.setSelectedOption(selectItemMock)).toBeUndefined();
  });

  it('Testing method disable()', () => {
    expect(component.disable()).toBeUndefined();
  });

  it('Testing method print()', () => {
    expect(component.print()).toBeUndefined();
  });

  it('Testing method setSelectedOptionAction()', () => {
    expect(component.setSelectedOptionAction(selectItemMock)).toBeUndefined();
  });

  it('Testing method disableAction()', () => {
    expect(component.disableAction()).toBeUndefined();
  });

  it('Testing method printAction()', () => {
    expect(component.printAction()).toBeUndefined();
  });

  it('Testing method setSelectedOptionYes()', () => {
    expect(component.setSelectedOptionYes(selectItemMock)).toBeUndefined();
  });

  it('Testing method disableYes()', () => {
    expect(component.disableYes()).toBeUndefined();
  });

  it('Testing method printYes()', () => {
    expect(component.printYes()).toBeUndefined();
  });
});
