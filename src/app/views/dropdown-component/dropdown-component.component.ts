import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { DropdownItem } from 'dist/packen-ng/interfaces/dropdown-item';

@Component({
  selector: 'app-dropdown-component',
  templateUrl: './dropdown-component.component.html',
  styleUrls: ['./dropdown-component.component.scss']
})
export class DropdownComponentComponent implements OnInit {
  @Input() items: Array<DropdownItem> = [];
  @Input() type: DropdownType = 'default';
  @Input() size: StatesSizesInput = 'tiny';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() lazy: boolean = false;
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() level: string = '';

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
  isClickInside: boolean = false;

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

  // Variable maneja el estado del item(selected, disabled, normal)
  stateClassItem: string = '';

  // Dropdown con estilo
  sizeDropdownClass: string = '';
  contentListItemsClass: string = '';


  constructor() {
  }

  ngOnInit(): void {
    this.temporaryItemsList = this.items;
    this.getItemSelected();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items) {
      this.getItemSelected();
      this.temporaryItemsList = this.items;
    }
    if (changes.disabled) {
      this.disabled = changes.disabled.currentValue === true ? true : false;
    }

    if (changes.size) {
      this.loadSizeDropdownStyle();
    }
  }

  // ----------------------------------------------------------------------------------------------
  // Métodos para manejo de Comportamientos (Eventos)
  // ----------------------------------------------------------------------------------------------

  clickInput(): void {
    this.isClickInside = true;
    if (!this.disabled) {
      this.showMenuList = true;
    }
  }

  clickOutsideContent(): void {
    if (this.isClickInside) {
      this.showMenuList = false;
      if (!this.value) {
        this.textInput = '';
      } else {
        if (!this.lazy) {
          const property = this.getProperty();
          this.textInput = this.temporaryItemsList.find(i => i.id === this.value)?.[property];
        }
      }
      this.isClickInside = false;
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

      console.log(this.itemSelected);
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
    let classLevelItem = '';
    switch (this.level) {
      case 'primary':
        classLevelItem = ContentItemClass.primary;
        break;
    }

    if (i.disabled) {
      switch (this.level) {
        case 'primary':
          return classLevelItem + " content__item--disabled";
      }

      return classLevelItem + ItemStyles.disabled;
      //return ItemStyles.disabled;
    }

    if (!i.info) {
      if (i.id === this.value) {
        if (this.level) {
          switch (this.level) {
            case 'primary':
              return classLevelItem + " " + ItemStyles.selectedPrimary;
          }
        }
        return classLevelItem + " " + ItemStyles.selected;
      }
    }
    return classLevelItem;
  }

  getClassTitle(i: DropdownItem): string {
    if (!i.info) {
      if (i.id === this.value) {
        return TitleStyles.selected;
      }
    }
  }

  getClassText(i: DropdownItem): string {
    switch (this.level) {
      case 'primary':
        return '';
    }

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
    let levelClassStyle = '';
    switch (this.level) {
      case 'primary':
        levelClassStyle = IconStyles.primary;
        break;
    }

    if (i.disabled) {
      return IconStyles.disabled;
    }

    if (i.id === this.value) {
      return IconStyles.selected;
    }

    return levelClassStyle;
  }

  getOpacityImageItemDisabled(i: DropdownItem): string {
    let levelClass = '';
    switch (this.level) {
      case 'primary':
        levelClass = 'content__item__avatar--primary';
        break;
    }

    if (i.disabled) {
      return levelClass;
    }

    return levelClass;
  }

  getColorInfoType(i: DropdownItem): string {
    if (i.typeInfo === 'active') {
      return InfoStyles.active;
    }
  }

  //-----------------------------------------------------------------------------
  // Estilos del dropdown cuando es tipo de nivel o color
  //-----------------------------------------------------------------------------

  /**
   * Método carga el tamaño de dropdown con tipo estilo
   */
  loadSizeDropdownStyle() {
    switch (this.size) {
      case 'tiny':
        this.sizeDropdownClass = SizeDropdownStyle.tiny;
        break;
      case 'small':
        this.sizeDropdownClass = SizeDropdownStyle.small;
        break;
      case 'medium':
        this.sizeDropdownClass = SizeDropdownStyle.medium;
        break;
      case 'large':
        this.sizeDropdownClass = SizeDropdownStyle.large;
        break;
      case 'giant':
        this.sizeDropdownClass = SizeDropdownStyle.giant;
        break;
    }
  }

  loadStyleContentListItems() {
    switch (this.level) {
      case 'primary':
        this.contentListItemsClass = ContentListItemsClass.primary;
        break;
    }
  }

  /**
   * Método obtiene el texto de los estilos por el nivel
   */
  getContentText() {
    switch (this.level) {
      case 'primary':
        return 'content__item__contentText--primary';
    }
  }
}

type DropdownType = 'default' | 'radio' | 'checkbox';
type StatesSizesInput = 'tiny' | 'small' | 'medium' | 'large' | 'giant';

class ItemStyles {
  static readonly disabled = 'content__item content__item--disabled';
  static readonly selected = 'content__item content__item--selected';
  static readonly selectedPrimary = 'content__item--selected--primary';
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
  static readonly primary = 'content__item__icon--primary';
}

class AvatarStyles {
  static readonly disabled = 'content__item__avatar--disabled';
}

class SizeDropdownStyle {
  static readonly tiny = 'select__size--tiny';
  static readonly small = 'select__size--small';
  static readonly medium = 'select__size--medium';
  static readonly large = 'select__size--large';
  static readonly giant = 'select__size--giant';
}

class ContentListItemsClass {
  static readonly primary = 'content--primary';
}

class ContentItemClass {
  static readonly primary = 'content__item--primary';
}