import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { columnInfoMock, itemInfoMock, tableRowMock } from '../../assets/mocks/table.mock';

import { PackenTableComponent } from './packen-table.component';

describe('PackenTableComponent', () => {
  let component: PackenTableComponent;
  let fixture: ComponentFixture<PackenTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackenTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackenTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing method createPagesList()', () => {
    component.numPages = 5;
    component.createPagesList();
    expect(component.listPages.length).toBeGreaterThan(0);
  });

  // When is mobile
  it('Testing method getPropertyStyle() when is capitalize and blue-box', () => {
    itemInfoMock.style = 'blue-box';
    expect(component.getPropertyStyle(itemInfoMock)).toEqual(' blue-box capitalize');
  });

  it('Testing method getPropertyStyle() when is capitalize and gray-box', () => {
    itemInfoMock.style = 'gray-box';
    expect(component.getPropertyStyle(itemInfoMock)).toEqual(' gray-box capitalize');
  });

  it('Testing method getPropertyStyle() when is capitalize and blue-gray-box', () => {
    itemInfoMock.style = 'blue-gray-box';
    expect(component.getPropertyStyle(itemInfoMock)).toEqual(' blue-gray-box capitalize');
  });

  it('Testing method getPropertyStyle() when is not capitalize and blue-box', () => {
    itemInfoMock.style = 'blue-box';
    itemInfoMock.capitalize = false;
    expect(component.getPropertyStyle(itemInfoMock)).toEqual(' blue-box');
  });

  it('Testing method getPropertyStyle() when is not capitalize and gray-box', () => {
    itemInfoMock.style = 'gray-box';
    itemInfoMock.capitalize = false;
    expect(component.getPropertyStyle(itemInfoMock)).toEqual(' gray-box');
  });

  it('Testing method getPropertyStyle() when is not capitalize and blue-gray-box', () => {
    itemInfoMock.style = 'blue-gray-box';
    itemInfoMock.capitalize = false;
    expect(component.getPropertyStyle(itemInfoMock)).toEqual(' blue-gray-box');
  });

  it('Testing method getPropertyStyle() when is capitalize and other box style', () => {
    itemInfoMock.style = 'other-box';
    expect(component.getPropertyStyle(itemInfoMock)).toEqual('box-def');
  });

  it('Testing method getPropertyStyle() when item value is null', () => {
    itemInfoMock.value = null;
    expect(component.getPropertyStyle(itemInfoMock)).toEqual('box-def');
  });

  it('Testing method getPropertyStyle() when item key is null', () => {
    itemInfoMock.key = null;
    expect(component.getPropertyStyle(itemInfoMock)).toEqual('');
  });

  // When is desktop
  it('Testing method getPropertyDesktopStyle() when is capitalize and blue-box', () => {
    itemInfoMock.style = 'blue-box';
    itemInfoMock.value = 'German';
    itemInfoMock.capitalize = true;
    itemInfoMock.showInDesktop = true;
    expect(component.getPropertyDesktopStyle(itemInfoMock)).toEqual(' blue-box no-margin capitalize');
  });

  it('Testing method getPropertyDesktopStyle() when is capitalize and gray-box', () => {
    itemInfoMock.style = 'gray-box';
    itemInfoMock.key = 'Nombre';
    itemInfoMock.value = 'German';
    itemInfoMock.capitalize = true;
    itemInfoMock.showInDesktop = true;
    expect(component.getPropertyDesktopStyle(itemInfoMock)).toEqual(' gray-box no-margin capitalize');
  });

  it('Testing method getPropertyDesktopStyle() when is capitalize and blue-gray-box', () => {
    itemInfoMock.style = 'blue-gray-box';
    itemInfoMock.key = 'Nombre';
    itemInfoMock.value = 'German';
    itemInfoMock.capitalize = true;
    itemInfoMock.showInDesktop = true;
    expect(component.getPropertyDesktopStyle(itemInfoMock)).toEqual(' blue-gray-box no-margin capitalize');
  });

  it('Testing method getPropertyDesktopStyle() when is not capitalize and blue-box', () => {
    itemInfoMock.style = 'blue-box';
    itemInfoMock.key = 'Nombre';
    itemInfoMock.value = 'German';
    itemInfoMock.capitalize = false;
    itemInfoMock.showInDesktop = true;
    expect(component.getPropertyDesktopStyle(itemInfoMock)).toEqual(' blue-box no-margin');
  });

  it('Testing method getPropertyDesktopStyle() when is not capitalize and gray-box', () => {
    itemInfoMock.style = 'gray-box';
    itemInfoMock.key = 'Nombre';
    itemInfoMock.value = 'German';
    itemInfoMock.capitalize = false;
    itemInfoMock.showInDesktop = true;
    expect(component.getPropertyDesktopStyle(itemInfoMock)).toEqual(' gray-box no-margin');
  });

  it('Testing method getPropertyDesktopStyle() when is not capitalize and blue-gray-box', () => {
    itemInfoMock.style = 'blue-gray-box';
    itemInfoMock.key = 'Nombre';
    itemInfoMock.value = 'German';
    itemInfoMock.capitalize = false;
    itemInfoMock.showInDesktop = true;
    expect(component.getPropertyDesktopStyle(itemInfoMock)).toEqual(' blue-gray-box no-margin');
  });

  it('Testing method getPropertyDesktopStyle() when is capitalize and other box style', () => {
    itemInfoMock.style = 'other-box';
    itemInfoMock.key = 'Nombre';
    itemInfoMock.value = 'German';
    itemInfoMock.showInDesktop = true;
    expect(component.getPropertyDesktopStyle(itemInfoMock)).toEqual('left-margin');
  });

  it('Testing method getPropertyDesktopStyle() when item value is null', () => {
    itemInfoMock.value = null;
    itemInfoMock.showInDesktop = true;
    expect(component.getPropertyDesktopStyle(itemInfoMock)).toEqual('left-margin');
  });

  it('Testing method getPropertyDesktopStyle() when item key is null', () => {
    itemInfoMock.key = null;
    itemInfoMock.showInDesktop = true;
    expect(component.getPropertyDesktopStyle(itemInfoMock)).toEqual('');
  });

  // Testing rows
  it('Testing method sendSelectRow()', () => {
    expect(component.sendSelectRow(tableRowMock)).toBeUndefined();
  });

  // Testing columns
  it('Testing method getClassTextItem() when is head in mobile', () => {
    expect(component.getClassTextItem(columnInfoMock)).toEqual('table-mobile_content_section_box hide');
  });

  it('Testing method getClassTextItem() when is not in mobile', () => {
    columnInfoMock.headInMobile = false;
    expect(component.getClassTextItem(columnInfoMock)).toEqual('table-mobile_content_section_box');
  });

  // Testing td
  it('Testing method getClassTdDesktop() when index is 0', () => {
    expect(component.getClassTdDesktop(0, itemInfoMock)).toEqual('table-desktop_td_text first-text');
  });

  it('Testing method getClassTdDesktop() when index is different to 0', () => {
    expect(component.getClassTdDesktop(1, itemInfoMock)).toEqual('table-desktop_td_text others-text');
  });

  it('Testing method getClassTdDesktop() when index is 0 and is hidding in desktop', () => {
    itemInfoMock.hideInDesktop = true;
    expect(component.getClassTdDesktop(0, itemInfoMock)).toEqual('table-desktop_td_text first-text hide');
  });

  // Testing pagination
  it('Testing method movePageToRight()', () => {
    const page = { num: 1, classes: '' };
    const page2 = { num: 2, classes: '' };
    component.listPages = [page, page2];
    component.activePage = page;
    expect(component.movePageToRight()).toBeUndefined();
  });

  it('Testing method movePageToRight() and is the last page', () => {
    const page = { num: 1, classes: '' };
    component.listPages = [page];
    component.activePage = page;
    expect(component.movePageToRight()).toBeUndefined();
  });

  it('Testing method movePageToRight() and is the base max', () => {
    const page = { num: 6, classes: '' };
    component.activePage = page;
    expect(component.movePageToRight()).toBeUndefined();
  });

  it('Testing method movePageToLeft() and active page is 1', () => {
    const page = { num: 1, classes: '' };
    component.activePage = page;
    expect(component.movePageToLeft()).toBeUndefined();
  });

  it('Testing method movePageToLeft() and is the base min', () => {
    component.baseMin = 7;
    const page = { num: 7, classes: '' };
    component.activePage = page;
    expect(component.movePageToLeft()).toBeUndefined();
  });
});
