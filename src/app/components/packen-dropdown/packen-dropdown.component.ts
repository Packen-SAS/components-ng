import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropdownItem } from 'src/app/interfaces/dropdown-item';

@Component({
  selector: 'app-packen-dropdown',
  templateUrl: './packen-dropdown.component.html',
  styleUrls: ['./packen-dropdown.component.scss']
})
export class PackenDropdownComponent implements OnInit {
  @Input() items: Array<any> = [];
  @Input() selected: number = 1;
  @Input() label: string = '';
  @Input() type: string = 'default';
  @Input() value: string = '';
  @Input() selectedItemId: number = 0;
  @Input() size: string = 'tiny'
  @Output() outputChangeItem = new EventEmitter<any>();
  @Output() changeCheckbox = new EventEmitter<any>();

  itemSelected: DropdownItem = {
    id: 0,
    title: '',
    disabled: false,
    left: false,
    right: false
  };
  showMenuList: boolean = false;
  hoverItem: string = '';
  constructor() {
  }

  ngOnInit(): void {
    this.getItemSelected();
    console.log(this.items)
    console.log("Tamaño ", this.size);

  }

  getItemSelected = async () => {
    this.itemSelected = await this.items.find((item) => item.id == this.selected);

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
      this.outputChangeItem.emit(item.id);
      this.itemSelected = item;
      this.showMenuList = false;
    }
  }

  getClassText = (i: DropdownItem): string => {
    if (i.disabled) {
      return contentTextStyles.disabled;
    }
  }

  clickInput = (): void => {
    this.showMenuList = !this.showMenuList;
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

  changeRadio = (data): void => {
    this.outputChangeItem.emit(data);
  }


  clickOutsideContent = (): void => {
    this.showMenuList = false;
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