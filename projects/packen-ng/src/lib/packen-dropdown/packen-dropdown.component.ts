import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DropdownItem } from '../../interfaces/dropdown-item';

@Component({
  selector: 'lib-packen-dropdown',
  templateUrl: './packen-dropdown.component.html',
  styleUrls: ['./packen-dropdown.component.scss']
})
export class PackenDropdownComponent implements OnInit, OnChanges {

  @Input() items: Array<any> = [];
  @Input() label: string = '';
  @Input() type: string = 'default';
  @Input() size: string = 'tiny';
  @Input() required: boolean = false;

  @Output() outputChangeItem = new EventEmitter<any>();
  @Output() changeCheckbox = new EventEmitter<any>();
  @Output() keyUp = new EventEmitter<any>();
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items) {
      this.getItemSelected();
    }
  }

  ngOnInit(): void {
    this.temporaryItemsList = this.items;
    this.getItemSelected();
  }

  getItemSelected = () => {
    if (this.type !== 'radio' && this.type !== 'checkbox') {
      if (this.items) {
        this.itemSelected = this.items.find((item) => item.id === this.value);
        this.textInput = this.itemSelected ? this.itemSelected.title : null;
      }
    } else {
      if (this.items) {
        const radio = this.items.find((item) => item.id === this.value);
        if (radio) {
          this.textInput = radio.label;
        }
      }
    }
  }

  getClassItem = (i: DropdownItem): string => {
    if (i.disabled) {
      return ItemStyles.disabled;
    }

    if (!i.info) {
      if (i.id === this.value) {
        return ItemStyles.selected;
      }
    }
  }

  getClassTitle = (i: DropdownItem): string => {
    if (!i.info) {
      if (i.id === this.value) {
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
      return ContentTextStyles.disabled;
    }
  }

  clickInput = (): void => {
    if (!this.showMenuList) {
      this.showMenuList = true;
    }
  }

  getColorSubTitleWhenItemIsSelected = (i: DropdownItem): string => {
    if (!i.info) {
      if (i.id === this.value) {
        return TitleStyles.selected;
      }
    }
  }

  getColorIconWhenItemIsSelected = (i: DropdownItem): string => {
    if (i.disabled) {
      return IconStyles.disabled;
    }

    if (i.id === this.value) {
      return IconStyles.selected;
    }
  }

  getOpacityImageItemDisabled = (i: DropdownItem): string => {
    if (i.disabled) {
      return AvatarStyles.disabled;
    }
  }

  getColorInfoType = (i: DropdownItem): string => {
    if (i.typeInfo === 'active') {
      return InfoStyles.active;
    }
  }

  changeStateCheckBox = (data): void => {
    this.outputChangeItem.emit(data);
  }

  clickOutsideContent = (): void => {
    this.showMenuList = false;
    if (!this.value) {
      this.textInput = '';
    }
  }

  changeRadio(radio) {
    this.textInput = radio.label;
    this.showMenuList = false;
  }

  keyUpInput(text) {
    this.keyUp.emit(text);
    const newArray = [];
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

class ContentTextStyles {
  static readonly disabled = 'content__item__contentText__textP--disabled';
}

class IconStyles {
  static readonly selected = 'content__item__icon--selected';
  static readonly disabled = 'content__item__icon--disabled';
}

class AvatarStyles {
  static readonly disabled = 'content__item__avatar--disabled';
}
