import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropdownItem } from '../../interfaces/dropdown-item';

@Component({
  selector: 'lib-packen-dropdown',
  templateUrl: './packen-dropdown.component.html',
  styleUrls: ['./packen-dropdown.component.scss']
})
export class PackenDropdownComponent implements OnInit {

  @Input() items: Array<any> = [];
  @Input() selected: number = 1;
  @Input() label: string = '';
  @Input() type: string = 'default';
  @Input() selectedItemId: number = 0;
  @Input() size: string = 'tiny'

  @Output() outputChangeItem = new EventEmitter<any>();
  @Output() changeCheckbox = new EventEmitter<any>();
  @Output() valueChange = new EventEmitter<any>();

  @Input()
  get value() {
    return this.temporaryData;
  }
  set value(val) {
    this.temporaryData = val;
    this.valueChange.emit(this.temporaryData);
  }

  textInput = '';
  temporaryData = null;
  temporaryChecks = null;

  itemSelected: DropdownItem = {
    id: 0,
    title: '',
    disabled: false,
    left: false,
    right: false
  };

  showMenuList: boolean = false;
  hoverItem: string = '';
  temporaryItemsList: any = [];

  constructor() { }

  ngOnInit(): void {
    this.temporaryItemsList = this.items;
    this.getItemSelected();
  }

  getItemSelected = () => {
    if (this.type !== 'radio' && this.type !== 'checkbox') {
      this.itemSelected = this.items.find((item) => item.id == this.value);
      this.textInput = this.itemSelected ? this.itemSelected.title : null;
    } else {
      let radio = this.items.find((item) => item.id == this.selectedItemId);
      if (radio) {
        this.textInput = radio.label;
      }
    }
  }

  getClassItem = (i: DropdownItem): string => {
    if (i.disabled) {
      return ItemStyles.disabled;
    }

    if (!i.info) {
      if (i.id == this.selected) {
        return ItemStyles.selected;
      }
    }
  }

  getClassTitle = (i: DropdownItem): string => {
    if (!i.info) {
      if (i.id == this.selected) {
        return TitleStyles.selected;
      }
    }
  }

  selectItem = (item: DropdownItem): void => {
    if (!item.disabled) {
      this.valueChange.emit(item.id);
      this.itemSelected = item;
      this.textInput = item.title;
      this.showMenuList = false;
    }
  }

  getClassText = (i: DropdownItem): string => {
    if (i.disabled) {
      return contentTextStyles.disabled;
    }
  }

  clickInput = (): void => {
    if (!this.showMenuList) {
      this.showMenuList = true;
    }
  }

  getColorSubTitleWhenItemIsSelected = (i: DropdownItem): string => {
    if (!i.info) {
      if (i.id == this.selected) {
        return TitleStyles.selected;
      }
    }
  }

  getColorIconWhenItemIsSelected = (i: DropdownItem): string => {
    if (i.disabled) {
      return IconStyles.disabled;
    }

    if (i.id == this.selected) {
      return IconStyles.selected;
    }
  }

  getOpacityImageItemDisabled = (i: DropdownItem): string => {
    if (i.disabled) {
      return AvatarStyles.disabled;
    }
  }

  getColorInfoType = (i: DropdownItem): string => {
    if (i.typeInfo == 'active') {
      return InfoStyles.active;
    }
  }

  changeStateCheckBox = (data): void => {
    this.outputChangeItem.emit(data);
  }

  clickOutsideContent = (): void => {
    this.showMenuList = false;
  }

  changeRadio(radio) {
    this.textInput = radio.label;
    this.showMenuList = false;
  }

  keyUpInput(text) {
    let newArray = [];
    this.items.forEach((item) => {
      if (this.type !== 'radio' && this.type !== 'checkbox') {
        if (item.title.toUpperCase().includes(text.toUpperCase())) {
          newArray.push(item);
        }
      } else {
        if (item.label.toUpperCase().includes(text.toUpperCase())) {
          newArray.push(item);
        }
      }
    });
    this.temporaryItemsList = newArray;
  }
}

class ItemStyles {
  static readonly disabled = 'content__item content__item--disabled';
  static readonly selected = 'content__item content__item--selected';
}

class TitleStyles {
  static readonly selected = 'content__item__contentText__textP__title--selected';
}

class InfoStyles {
  static readonly active = 'content__item__contentText__textP__info--active';
}

class contentTextStyles {
  static readonly disabled = 'content__item__contentText__textP--disabled';
}

class IconStyles {
  static readonly selected = 'content__item__icon--selected';
  static readonly disabled = 'content__item__icon--disabled';
}

class AvatarStyles {
  static readonly disabled = 'content__item__avatar--disabled';
}