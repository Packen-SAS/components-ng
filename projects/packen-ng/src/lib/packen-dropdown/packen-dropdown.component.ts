import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { DropdownItem } from '../../interfaces/dropdown-item';

@Component({
  selector: 'lib-packen-dropdown',
  templateUrl: './packen-dropdown.component.html',
  styleUrls: ['./packen-dropdown.component.scss']
})
export class PackenDropdownComponent implements OnInit, OnChanges {

  @Input() items: Array<DropdownItem> = [];
  @Input() type: DropdownType = 'default';
  @Input() size: StatesSizesInput = 'tiny';
  @Input() required: boolean = false;
  @Input() lazy: boolean = false;
  @Input() placeholder: string = '';
  @Input() label: string = '';

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
    left: null,
    right: null
  };

  showMenuList: boolean = false;
  hoverItem: string = '';
  temporaryItemsList: DropdownItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.temporaryItemsList = this.items;
    this.getItemSelected();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items) {
      this.getItemSelected();
      this.temporaryItemsList = this.items;
    }
  }

  // ----------------------------------------------------------------------------------------------
  // Métodos para manejo de Comportamientos (Eventos)
  // ----------------------------------------------------------------------------------------------

  clickInput(): void {
    this.showMenuList = true;
  }

  clickOutsideContent(): void {
    this.showMenuList = false;
    if (!this.value) {
      this.textInput = '';
    } else {
      if (!this.lazy) {
        const property = this.getProperty();
        this.textInput = this.temporaryItemsList.find(i => i.id === this.value)?.[property];
      }
    }
  }

  getItemSelected() {
    if (this.type === 'default') {
      if (this.items && this.items.length > 0) {
        this.itemSelected = this.items.find(i => i.id === this.value);

        const property = this.getProperty();
        this.textInput = this.itemSelected ? this.itemSelected[property] : this.textInput;
      }
    } else { // radio o checkbox
      if (this.items) {
        const radio = this.items.find(i => i.id === this.value);
        if (radio) {
          this.textInput = radio.label;
        }
      }
    }
  }

  selectItem(item: DropdownItem): void {
    if (!item.disabled) {
      this.valueChange.emit(item.id);
      this.itemSelected = item;

      const property = this.getProperty();
      this.textInput = item[property];
      this.showMenuList = false;
    }
  }

  keyUpInput(text) {
    if (this.lazy) {
      this.value = false;
      if (text.length > 0 && text) {
        this.keyUp.emit(text);
      }
    } else {
      if (text) {
        this.filterItemsEagerly(text);
      }
    }
  }

  filterItemsEagerly(text: string) {
    const property = this.getProperty();
    this.temporaryItemsList = this.items.filter(i => i[property]?.toUpperCase().includes(text.toUpperCase()));
  }

  getProperty(): string {
    return this.type === 'default' ? 'title' : 'label';
  }

  changeStateCheckBox(data): void {
    this.outputChangeItem.emit(data);
  }

  changeRadio(radio) {
    this.textInput = radio.label;
    this.showMenuList = false;
  }

  // ----------------------------------------------------------------------------------------------
  // Métodos para manejo de Estilos
  // ----------------------------------------------------------------------------------------------

  getClassItem(i: DropdownItem): string {
    if (i.disabled) {
      return ItemStyles.disabled;
    }

    if (!i.info) {
      if (i.id === this.value) {
        return ItemStyles.selected;
      }
    }
  }

  getClassTitle(i: DropdownItem): string {
    if (!i.info) {
      if (i.id === this.value) {
        return TitleStyles.selected;
      }
    }
  }

  getClassText(i: DropdownItem): string {
    if (i.disabled) {
      return ContentTextStyles.disabled;
    }
  }

  getColorSubTitleWhenItemIsSelected(i: DropdownItem): string {
    if (!i.info) {
      if (i.id === this.value) {
        return TitleStyles.selected;
      }
    }
  }

  getColorIconWhenItemIsSelected(i: DropdownItem): string {
    if (i.disabled) {
      return IconStyles.disabled;
    }

    if (i.id === this.value) {
      return IconStyles.selected;
    }
  }

  getOpacityImageItemDisabled(i: DropdownItem): string {
    if (i.disabled) {
      return AvatarStyles.disabled;
    }
  }

  getColorInfoType(i: DropdownItem): string {
    if (i.typeInfo === 'active') {
      return InfoStyles.active;
    }
  }
}

type DropdownType = 'default' | 'radio' | 'checkbox';
type StatesSizesInput = 'tiny' | 'small' | 'medium' | 'large' | 'giant';

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
