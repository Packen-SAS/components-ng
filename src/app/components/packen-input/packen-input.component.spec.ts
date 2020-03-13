import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackenInputComponent } from './packen-input.component';

describe('PackenInputComponent', () => {
  let component: PackenInputComponent;
  let fixture: ComponentFixture<PackenInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackenInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Render the class styles input
  it('render the class of inputs when size is tiny', () =>{
    expect(component.getClassStylesInput('tiny')).toEqual('content__input-container__input--tiny');
  })

  it('render the class of inputs when size is medium ', () =>{
    expect(component.getClassStylesInput('medium')).toEqual('content__input-container__input--medium');
  });

  it('render the class of inputs when size is large', () =>{
    expect(component.getClassStylesInput('large')).toEqual('content__input-container__input--large');
  });

  it('render the class of inputs when size is giant', () =>{
    expect(component.getClassStylesInput('giant')).toEqual('content__input-container__input--large')
  });



  //Render the class styles input
});
