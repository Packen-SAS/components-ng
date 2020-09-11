import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { fromEvent, BehaviorSubject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'lib-packen-dropdown-show',
  templateUrl: './packen-dropdown-show.component.html',
  styleUrls: ['./packen-dropdown-show.component.scss']
})
export class PackenInputShowDropdownComponent implements OnInit {
  @ViewChild('search') searchElement: ElementRef;

  @Input() items: Array<InputDropdownItem> = [];
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

  ngOnInit(): void {
    this.loadTitleInput();
    setTimeout(() => {
      this.keyUpSearch();
    }, 300);
  }

  /**
   * Metodo funciona cuando se da click en el componente
   */
  clickInputComponent() {
    this.showInput = true;
    this.showInputChange.next(true);
    this.showListItems = true;

    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 200);
  }

  /**
   * Metodo se ejecuta cuando se da click fuera del componente
   */
  clickOutsideContent() {
    this.showInput = false;
    this.showInputChange.next(false);
    this.showListItems = false;

  }

  /**
   * Metodo es llamado cuando se selecciona un item
   * @param item objeto del tipo item
   */
  selectItem(item: InputDropdownItem) {
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
        this.validateRequiredInput(value);
      }
    });
  }

  /**
   * Metodo retorna la clase selected cuando el item es igual al seleccionado 
   * @param item Objecto del tipo InputDropdownItem
   */
  getClassIsSelected(item: InputDropdownItem): string {
    if (item.id === this.value) {
      return 'cont__options__item--selected';
    }
    return '';
  }

  /**
   * Metodo carga la información a mostrar en el input
   */
  loadTitleInput() {
    this.items.forEach((item: InputDropdownItem) => {
      if (item.id === this.value) {
        this.titleInput = item.title;
        this.valueWrittenInput = item.title;
      }
    });
  }

  /**
   * 
   * @param value cadena de texto del input
   */
  validateRequiredInput(value: string) {
    this.classInput = '';
    if (value.length === 0) {
      this.classInput = 'cont__component__input--required';
    }
  }
}

interface InputDropdownItem {
  id: number;
  title?: string;
}

