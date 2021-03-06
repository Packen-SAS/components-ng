import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PackenNgModule } from 'packen-ng';

import { DividersComponent } from './dividers.component';

describe('DividersComponent', () => {
  let component: DividersComponent;
  let fixture: ComponentFixture<DividersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DividersComponent
      ],
      imports: [
        PackenNgModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
