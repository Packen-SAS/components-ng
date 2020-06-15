import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenCarouselComponent } from './packen-carousel.component';

describe('PackenCarouselComponent', () => {
  let component: PackenCarouselComponent;
  let fixture: ComponentFixture<PackenCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackenCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
