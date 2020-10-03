import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { DropdownShowItem } from '../../interfaces/dropdown-show-item';

@Component({
  selector: 'lib-packen-dropdown-show',
  templateUrl: './packen-dropdown-show.component.html',
  styleUrls: ['./packen-dropdown-show.component.scss']
})
export class PackenDropdownShowComponent implements OnInit, OnChanges {

  @ViewChild('searchIdPackenDropdown') searchElement: ElementRef;
  @Input() items: Array<DropdownShowItem> = [];
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() labelPosition: string = 'bottom';
  @Input() required = false;
  @Input() phantom: boolean = false;
  @Input() disabled: boolean = false;
  @Input() title: string = '';
  @Input() inputType: string = 'text';

  @Output() keyUpValue = new EventEmitter<string>();
  @Output() changeValue = new EventEmitter<DropdownShowItem>();

  showInput: boolean = false;
  showListItems: boolean = false;

  messageValue: number = null;
  titleInput: string = 'Test de title';
  valueWrittenInput: string = '';
  classInput: string = '';
  classInputPhantom: string = '';
  inputChildRequired: boolean = false;
  classContentDisabled: string = '';

  isClicked: boolean = false;
  placeholderInputShow: boolean = true;

  @Output()
  valueChange = new EventEmitter<any>();

  @Input()
  get value() {
    return this.messageValue;
  }

  set value(val) {
    this.messageValue = val;
    this.valueChange.emit(this.messageValue);
  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value) {
      this.loadTitleInput();
    }

    if (changes.items && this.value) {
      this.loadTitleInput();
    }

    if (changes.disabled) {
      this.getClassIsDisabled();
    }
  }

  ngOnInit(): void {
    this.titleInput = this.title;
    this.loadTitleInput();
    this.getClassIsPhantom();
    this.getClassIsDisabled();
    setTimeout(() => {
      this.keyUpSearch();
    }, 100);
  }

  /**
   * Metodo funciona cuando se da click en el componente
   */
  clickInputComponent() {
    if (!this.disabled) {
      this.showInput = true;
      this.showListItems = true;
      this.isClicked = true;
      setTimeout(() => {
        this.searchElement.nativeElement.focus();
      }, 100);
    }
  }

  /**
   * Metodo se ejecuta cuando se da click fuera del componente
   */
  clickOutsideContent() {
    this.showInput = false;
    this.showListItems = false;

    if (!this.value) {
      if (this.isClicked) {
        this.inputChildRequired = true;
        this.valueWrittenInput = '';
        this.titleInput = this.title;
        this.placeholderInputShow = true;
        this.isClicked = false;
        this.changeValue.emit(null);
      }
    }
  }

  /**
   * Metodo es llamado cuando se selecciona un item
   * @param item objeto del tipo item
   */
  selectItem(item: DropdownShowItem) {
    this.value = item.id;
    this.changeValue.emit(item);
    this.showInput = false;
    this.showListItems = false;
    this.loadTitleInput();
    this.clickOutsideContent();
    this.placeholderInputShow = false;
    this.inputChildRequired = false;
  }

  /**
   * Metodo emite el valor inscrito en el input
   */
  keyUpSearch() {
    fromEvent(this.searchElement.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      })
      , debounceTime(200)
    ).subscribe((value: string) => {
      this.keyUpValue.emit(value);
      if (this.required) {
        this.value = null;
        this.validateRequiredInput();
      }
    });
  }

  /**
   * Metodo coloca la clase requerido al input cuando lo requiere
   */
  validateRequiredInput() {
    this.classInput = '';
    if (!this.valueWrittenInput) {
      this.classInput = ContentClass.requiredInput;
    }
  }

  /**
   * Metodo retorna la clase selected cuando el item es igual al seleccionado
   * @param item Objecto del tipo InputDropdownItem
   */
  getClassIsSelected(item: DropdownShowItem): string {
    if (item.id === this.value) {
      return ContentClass.itemSelected;
    }
    return '';
  }

  /**
   * Metodo carga la información a mostrar en el input
   */
  loadTitleInput() {
    this.items.forEach((item: DropdownShowItem) => {
      if (item.id === this.value) {
        this.titleInput = item.title;
        this.valueWrittenInput = item.title;
        this.placeholderInputShow = false;
      }
    });
  }

  /**
   * Método asigna la clase phantom cuado la variable phatom es verdadero
   */
  getClassIsPhantom() {
    if (this.phantom) {
      this.classInputPhantom = ContentClass.phantom;
    }
  }

  /**
   * Método asigna la clase disabled si
   */
  getClassIsDisabled() {
    this.classContentDisabled = '';
    if (this.disabled) {
      this.classContentDisabled = ContentClass.disabled;
    }
  }
}

// Clases del contenido
class ContentClass {
  static readonly phantom = 'cont--phantom';
  static readonly disabled = 'cont--disabled';
  static readonly requiredInput = 'cont__component__input--required';
  static readonly itemSelected = 'cont__options__item--selected';
}
