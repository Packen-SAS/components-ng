import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { fromEvent, BehaviorSubject } from 'rxjs';
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
  @Output() keyUpValue = new EventEmitter<string>();

  showInput: boolean = false;
  showInputChange = new BehaviorSubject<boolean>(false);
  showListItems: boolean = false;

  messageValue: number = null;
  titleInput: string = '';
  valueWrittenInput: string = '';
  classInput: string = '';
  classContent: string = '';

  isClicked: boolean = false;
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
  }

  ngOnInit(): void {
    this.loadTitleInput();
    setTimeout(() => {
      this.keyUpSearch();
    }, 100);
  }

  /**
   * Metodo funciona cuando se da click en el componente
   */
  clickInputComponent() {
    this.showInput = true;
    this.showInputChange.next(true);
    this.showListItems = true;
    this.isClicked = true;
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 100);
  }

  /**
   * Metodo se ejecuta cuando se da click fuera del componente
   */
  clickOutsideContent() {
    this.showInput = false;
    this.showInputChange.next(false);
    this.showListItems = false;

    this.classContent = '';
    if (!this.value || this.valueWrittenInput === '') {
      if (this.isClicked) {
        this.classContent = 'cont--required';
        this.valueWrittenInput = '';
        this.titleInput = '';
        this.isClicked = false;
      }

    }
  }

  /**
   * Metodo es llamado cuando se selecciona un item
   * @param item objeto del tipo item
   */
  selectItem(item: DropdownShowItem) {
    this.value = item.id;
    this.showInput = false;
    this.showInputChange.next(false);
    this.showListItems = false;
    this.loadTitleInput();
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
   * Metodo retorna la clase selected cuando el item es igual al seleccionado
   * @param item Objecto del tipo InputDropdownItem
   */
  getClassIsSelected(item: DropdownShowItem): string {
    if (item.id === this.value) {
      return 'cont__options__item--selected';
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
      }
    });
  }

  /**
   * Metodo coloca la clase requerido al input cuando lo requiere
   */
  validateRequiredInput() {
    this.classInput = '';
    if (this.valueWrittenInput.length === 0 && this.required && this.classContent !== 'cont--required') {
      this.classInput = 'cont__component__input--required';
    }
  }
}
