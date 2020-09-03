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

  it('Testing method getPropertyStyle() when is capitalize and purple-box', () => {
    itemInfoMock.style = 'purple-box';
    expect(component.getPropertyStyle(itemInfoMock)).toEqual(' purple-box capitalize');
  });

  it('Testing method getPropertyStyle() when is capitalize and green-vivid-box', () => {
    itemInfoMock.style = 'green-vivid-box';
    expect(component.getPropertyStyle(itemInfoMock)).toEqual(' green-vivid-box capitalize');
  });

  it('Testing method getPropertyStyle() when is capitalize and red-vivid-box', () => {
    itemInfoMock.style = 'red-vivid-box';
    expect(component.getPropertyStyle(itemInfoMock)).toEqual(' red-vivid-box capitalize');
  });

  it('Testing method getPropertyStyle() when is capitalize and red-off-box', () => {
    itemInfoMock.style = 'red-off-box';
    expect(component.getPropertyStyle(itemInfoMock)).toEqual(' red-off-box capitalize');
  });

  it('Testing method getPropertyStyle() when is capitalize and green-off-box', () => {
    itemInfoMock.style = 'green-off-box';
    expect(component.getPropertyStyle(itemInfoMock)).toEqual(' green-off-box capitalize');
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

  it('Testing method getPropertyStyle() when is not capitalize and purple-box', () => {
    itemInfoMock.style = 'purple-box';
    itemInfoMock.capitalize = false;
    expect(component.getPropertyStyle(itemInfoMock)).toEqual(' purple-box');
  });

  it('Testing method getPropertyStyle() when is not capitalize and green-vivid-box', () => {
    itemInfoMock.style = 'green-vivid-box';
    itemInfoMock.capitalize = false;
    expect(component.getPropertyStyle(itemInfoMock)).toEqual(' green-vivid-box');
  });

  it('Testing method getPropertyStyle() when is not capitalize and red-vivid-box', () => {
    itemInfoMock.style = 'red-vivid-box';
    itemInfoMock.capitalize = false;
    expect(component.getPropertyStyle(itemInfoMock)).toEqual(' red-vivid-box');
  });

  it('Testing method getPropertyStyle() when is not capitalize and red-off-box', () => {
    itemInfoMock.style = 'red-off-box';
    itemInfoMock.capitalize = false;
    expect(component.getPropertyStyle(itemInfoMock)).toEqual(' red-off-box');
  });

  it('Testing method getPropertyStyle() when is not capitalize and green-off-box', () => {
    itemInfoMock.style = 'green-off-box';
    itemInfoMock.capitalize = false;
    expect(component.getPropertyStyle(itemInfoMock)).toEqual(' green-off-box');
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

  it('Testing method getPropertyDesktopStyle() when is capitalize and purple-box', () => {
    itemInfoMock.style = 'purple-box';
    itemInfoMock.key = 'Nombre';
    itemInfoMock.value = 'German';
    itemInfoMock.capitalize = true;
    itemInfoMock.showInDesktop = true;
    expect(component.getPropertyDesktopStyle(itemInfoMock)).toEqual(' purple-box no-margin capitalize');
  });

  it('Testing method getPropertyDesktopStyle() when is capitalize and green-vivid-box', () => {
    itemInfoMock.style = 'green-vivid-box';
    itemInfoMock.key = 'Nombre';
    itemInfoMock.value = 'German';
    itemInfoMock.capitalize = true;
    itemInfoMock.showInDesktop = true;
    expect(component.getPropertyDesktopStyle(itemInfoMock)).toEqual(' green-vivid-box no-margin capitalize');
  });

  it('Testing method getPropertyDesktopStyle() when is capitalize and red-vivid-box', () => {
    itemInfoMock.style = 'red-vivid-box';
    itemInfoMock.key = 'Nombre';
    itemInfoMock.value = 'German';
    itemInfoMock.capitalize = true;
    itemInfoMock.showInDesktop = true;
    expect(component.getPropertyDesktopStyle(itemInfoMock)).toEqual(' red-vivid-box no-margin capitalize');
  });

  it('Testing method getPropertyDesktopStyle() when is capitalize and red-off-box', () => {
    itemInfoMock.style = 'red-off-box';
    itemInfoMock.key = 'Nombre';
    itemInfoMock.value = 'German';
    itemInfoMock.capitalize = true;
    itemInfoMock.showInDesktop = true;
    expect(component.getPropertyDesktopStyle(itemInfoMock)).toEqual(' red-off-box no-margin capitalize');
  });

  it('Testing method getPropertyDesktopStyle() when is capitalize and green-off-box', () => {
    itemInfoMock.style = 'green-off-box';
    itemInfoMock.key = 'Nombre';
    itemInfoMock.value = 'German';
    itemInfoMock.capitalize = true;
    itemInfoMock.showInDesktop = true;
    expect(component.getPropertyDesktopStyle(itemInfoMock)).toEqual(' green-off-box no-margin capitalize');
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

  it('Testing method getPropertyDesktopStyle() when is not capitalize and purple-box', () => {
    itemInfoMock.style = 'purple-box';
    itemInfoMock.key = 'Nombre';
    itemInfoMock.value = 'German';
    itemInfoMock.capitalize = false;
    itemInfoMock.showInDesktop = true;
    expect(component.getPropertyDesktopStyle(itemInfoMock)).toEqual(' purple-box no-margin');
  });

  it('Testing method getPropertyDesktopStyle() when is not capitalize and green-vivid-box', () => {
    itemInfoMock.style = 'green-vivid-box';
    itemInfoMock.key = 'Nombre';
    itemInfoMock.value = 'German';
    itemInfoMock.capitalize = false;
    itemInfoMock.showInDesktop = true;
    expect(component.getPropertyDesktopStyle(itemInfoMock)).toEqual(' green-vivid-box no-margin');
  });

  it('Testing method getPropertyDesktopStyle() when is not capitalize and red-vivid-box', () => {
    itemInfoMock.style = 'red-vivid-box';
    itemInfoMock.key = 'Nombre';
    itemInfoMock.value = 'German';
    itemInfoMock.capitalize = false;
    itemInfoMock.showInDesktop = true;
    expect(component.getPropertyDesktopStyle(itemInfoMock)).toEqual(' red-vivid-box no-margin');
  });

  it('Testing method getPropertyDesktopStyle() when is not capitalize and red-off-box', () => {
    itemInfoMock.style = 'red-off-box';
    itemInfoMock.key = 'Nombre';
    itemInfoMock.value = 'German';
    itemInfoMock.capitalize = false;
    itemInfoMock.showInDesktop = true;
    expect(component.getPropertyDesktopStyle(itemInfoMock)).toEqual(' red-off-box no-margin');
  });

  it('Testing method getPropertyDesktopStyle() when is not capitalize and green-off-box', () => {
    itemInfoMock.style = 'green-off-box';
    itemInfoMock.key = 'Nombre';
    itemInfoMock.value = 'German';
    itemInfoMock.capitalize = false;
    itemInfoMock.showInDesktop = true;
    expect(component.getPropertyDesktopStyle(itemInfoMock)).toEqual(' green-off-box no-margin');
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

  it('Testing method getClasTdDesktop() when index is 0 and item.center is true', () => {
    itemInfoMock.center = true;
    expect(component.getClassTdDesktop(0, itemInfoMock)).toEqual('table-desktop_td_text first-text hide center');
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

  it('Testing getMinWidth() when isset minWidth', () => {
    itemInfoMock.minWidth = 80;
    expect(component.getMinWidth(itemInfoMock)).toEqual({ 'min-width': '80px', 'text-align': 'center' });
  });

  it('Testing getMinWidth() when minWidth is undefined', () => {
    itemInfoMock.minWidth = undefined;
    expect(component.getMinWidth(itemInfoMock)).toEqual({});
  });

});
