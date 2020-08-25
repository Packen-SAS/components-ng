import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenCarouselComponent } from './packen-carousel.component';

describe('PackenCarouselComponent', () => {
  let component: PackenCarouselComponent;
  let fixture: ComponentFixture<PackenCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackenCarouselComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing method loadPrincipalImage()', () => {
    component.images = [{ url: 'someurl' }];
    expect(component.loadPrincipalImage()).toBeUndefined();
  });

  it('Testing method changeImage() when is different to principalImage', () => {
    component.principalImage = 'otherurl';
    component.images = [{ url: 'someurl' }];
    expect(component.changeImage(0)).toBeUndefined();
  });

  it('Testing method changeImage() when is equal to principalImage', () => {
    component.principalImage = 'someurl';
    component.images = [{ url: 'someurl' }];
    expect(component.changeImage(0)).toBeUndefined();
  });

  it('Testing method loadClassStyles() when is equal to principalImage', () => {
    component.principalImage = 'someurl';
    expect(component.loadClassStyles({ url: 'someurl' })).toEqual('content__list__cnt-image content__list__cnt-image--selected');
  });

  it('Testing method loadClassStyles() when is different to principalImage', () => {
    component.principalImage = 'otherurl';
    expect(component.loadClassStyles({ url: 'someurl' })).toEqual('content__list__cnt-image');
  });

  it('Testing method loadClassStylesMovil() when is equal to principalImage', () => {
    component.principalImage = 'someurl';
    expect(component.loadClassStylesMovil({ url: 'someurl' })).toEqual('content__list-movil__item content__list-movil__item--selected');
  });

  it('Testing method loadClassStylesMovil() when is different to principalImage', () => {
    component.principalImage = 'otherurl';
    expect(component.loadClassStylesMovil({ url: 'someurl' })).toEqual('content__list-movil__item');
  });

  it('Testing method nextOrPreviusImage() when is < 0', () => {
    component.images = [{ url: 'someurl' }];
    expect(component.nextOrPreviusImage(-1)).toBeUndefined();
  });

  it('Testing method nextOrPreviusImage() when is === 1', () => {
    component.images = [{ url: 'someurl' }];
    expect(component.nextOrPreviusImage(1)).toBeUndefined();
  });

  it('Testing method nextOrPreviusImage() when is > 1', () => {
    component.images = [{ url: 'someurl' }, { url: 'someurl2' }, { url: 'someurl3' }];
    expect(component.nextOrPreviusImage(2)).toBeUndefined();
  });
});
