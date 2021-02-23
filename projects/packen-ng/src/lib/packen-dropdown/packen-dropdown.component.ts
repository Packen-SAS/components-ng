import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { DropdownItem } from '../../interfaces/dropdown-item';
import { RadioItem } from '../../interfaces/radio-item';

@Component({
  selector: 'lib-packen-dropdown',
  templateUrl: './packen-dropdown.component.html',
  styleUrls: ['./packen-dropdown.component.scss']
})
export class PackenDropdownComponent implements OnInit, OnChanges {

  @Input() items: Array<DropdownItem> = [];
  @Input() type: DropdownType = 'default';
  @Input() size: StatesSizesInput = 'tiny';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() lazy: boolean = false;
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() level: string = '';
  @Input() centerTitle: boolean = false;

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
  contentAllClass: string = '';
  centerTitleClass: string = '';

  // Estilos del radio
  contentRadio: string = '';

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

    if (changes.level) {
      this.loadStyleContent();
    }

    if (changes.type) {
      this.loadStylesContentRadio();
    }

    if (changes.centerTitle) {
      this.loadStyleContentTitle();
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

  /**
   * Método se ejecuta cuando cambia el radio
   * @param radio objeto del tipo RadioItem
   */
  changeRadio(radio: RadioItem) {
    this.itemSelected = radio;
    this.itemSelected.title = radio.label;

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
          return classLevelItem + ' ' + ContentItemClass.primaryDisabled;
      }

      return classLevelItem + ItemStyles.disabled;
    }

    if (!i.info) {
      if (i.id === this.value) {
        if (this.level) {
          switch (this.level) {
            case 'primary':
              return classLevelItem + ' ' + ItemStyles.selectedPrimary;
          }
        }
        return classLevelItem + ' ' + ItemStyles.selected;
      }
    }
    return classLevelItem;
  }

  /**
   * Método obtiene la clase del titulo
   * @param i objeto del tipo DropdownItem
   */
  getClassTitle(i: DropdownItem): string {
    if (!i.info) {
      if (i.id === this.value) {
        return TitleStyles.selected;
      }
    }
  }

  /**
   * Método obtiene la clase del texto dependiendo del nivel
   */
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
        levelClass = AvatarStyles.primary;
        break;
    }

    if (i.disabled) {
      return levelClass ? levelClass : AvatarStyles.disabled;
    }

    return levelClass;
  }

  getColorInfoType(i: DropdownItem): string {
    if (i.typeInfo === 'active') {
      return InfoStyles.active;
    }
  }

  // -----------------------------------------------------------------------------
  // Estilos del dropdown cuando es tipo de nivel o color
  // -----------------------------------------------------------------------------

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

  /**
   * Método carga los estilos del contenido del listado de las opciones
   */
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
        return ContentText.primary;
    }
  }

  /**
   * Método carga la clase del color del contenido
   */
  loadStyleContent() {
    switch (this.level) {
      case 'primary':
        this.contentAllClass = AllContentClass.primary;
        break;
    }
  }

  /**
   * Método centra el titulo si la variable centerTitle es true
   */
  loadStyleContentTitle() {
    if (this.centerTitle) {
      this.centerTitleClass = ContentTitle.center;
    }
  }

  // -----------------------------------------------------------------------------
  // Estilos del radio cuando es tipo de nivel o color
  // -----------------------------------------------------------------------------

  /**
   * Método carga los estilos del contenido del radio
   */
  loadStylesContentRadio() {
    if (this.type === 'radio') {
      switch (this.level) {
        case 'primary':
          this.contentRadio = ContentRadioLevel.primary;
          break;
      }
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
  static readonly primary = 'content__item__avatar--primary';
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
  static readonly primaryDisabled = 'content__item--primary--disabled';
}

class AllContentClass {
  static readonly primary = 'select__style--primary';
}

class ContentText {
  static readonly primary = 'content__item__contentText--primary';
}

class ContentRadioLevel {
  static readonly primary = 'radio__level--primary';
}

class ContentTitle {
  static readonly center = 'select__center-title';
}
