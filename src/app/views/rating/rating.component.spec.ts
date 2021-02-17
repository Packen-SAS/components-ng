import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PackenNgModule } from 'projects/packen-ng/src/public-api';

import { RatingComponent } from './rating.component';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PackenNgModule,
      ],
      declarations: [
        RatingComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
