import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenPinMapComponent } from './packen-pin-map.component';

describe('PackenPinMapComponent', () => {
  let component: PackenPinMapComponent;
  let fixture: ComponentFixture<PackenPinMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackenPinMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenPinMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('render classStyles content direction when type is active', () =>{
    expect(component.getClassTypeContentDirection('active')).toEqual('content__direction--active');
  });

  it('render classStyles content direction when type is active', () =>{
    expect(component.getClassTypeContentDirection('refresh')).toEqual('content__direction--default');
  });

  it('render classStyles content direction when type is other', () =>{
    expect(component.getClassTypeContentDirection('other')).toEqual('content__direction--default');
  });

  it('render classStyles label when type is active', () =>{
    expect(component.getClassLabel('active')).toEqual('content__direction__text--labelActive');
  });
 
  it('render classStyles label when type different to active', () =>{
    expect(component.getClassLabel('other')).toEqual('content__direction__text--labelDefault');
  }); 

  it('render the class of point position when icon is left', () =>{
    expect(component.getClassPointPosition('left')).toEqual('content__iconAndPoint__point--left');
  });

  it('render the class of point position when icon is top', () =>{
    expect(component.getClassPointPosition('top')).toEqual('content__iconAndPoint__point--top');
  });

  it('render the class of point position when icon is down', () =>{
    expect(component.getClassPointPosition('down')).toEqual('content__iconAndPoint__point--down');
  });

  it('render the class of point position when icon is right', () =>{
    expect(component.getClassPointPosition('right')).toEqual('content__iconAndPoint__point--right');
  });

  it('render the class of point position when icon is right', () =>{
    expect(component.getClassPointPosition('none')).toEqual('content__iconAndPoint__point--none');
  });

  it('render the class of point position when icon is other', () =>{
    expect(component.getClassPointPosition('other')).toEqual('content__iconAndPoint__point--none');
  });

  it('render color contentIcon when type is refresh ', () =>{
    expect(component.getColorContentIcon('refresh')).toEqual('content__iconAndPoint__contentIcon--refresh');
  });

  it('render color icon when type is refresh ', () =>{
    expect(component.getColorIcon('refresh')).toEqual('content__iconAndPoint__contentIcon__text--icon--refresh');
  });

});
