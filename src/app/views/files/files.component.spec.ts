import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PackenFileComponent } from '../packen-file/packen-file.component';

import { FilesComponent } from './files.component';

describe('FilesComponent', () => {
  let component: FilesComponent;
  let fixture: ComponentFixture<FilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilesComponent,
        PackenFileComponent
      ],
      imports: [
        FormsModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing method printFile()', () => {
    expect(component.printFile()).toBeUndefined();
  });

  it('Testing method disable() when is false', () => {
    component.disabledFile = false;
    component.disable();
    expect(component.disabledFile).toBeTruthy();
  });

  it('Testing method disable() when is true', () => {
    component.disabledFile = true;
    component.disable();
    expect(component.disabledFile).toBeFalsy();
  });
});
