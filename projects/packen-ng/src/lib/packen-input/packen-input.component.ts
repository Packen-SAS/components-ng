import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'lib-packen-input',
  templateUrl: './packen-input.component.html',
  styleUrls: ['./packen-input.component.scss']
})
export class PackenInputComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('searchinput') searchinput: ElementRef;

  @Input() size: StatesSizesInput = 'small';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() iconMessage: string = '';
  @Input() messageErrorValidation: string = '';
  @Input() messageErrorPattern: string = '';
  @Input() themeMessage: StatesThemeMessage = 'warning';
  @Input() disabled: boolean = false;
  @Input() icon: string = '';
  @Input() textArea: boolean = false;
  @Input() required: boolean = false;
  @Input() pattern: any = null;
  @Input() maxlength: number = 0;
  @Input() minlength: number = 0;
  @Input() mask: string;
  @Input() lazy: boolean = false;
  @Input() rows: number = 4;
  @Input() isDropdown: boolean = false;
  @Input() maxWidth: number = null;
  @Input() comment: string;
  @Input() name: string = 'packenInput';

  // Atributos para ngx-mask
  @Input() prefix: string;
  @Input() thousandSeparator: string = '.';

  @Output() keyUpInput = new EventEmitter<any>();
  @Output() outputClickOutside = new EventEmitter<boolean>();

  messageValue: string = '';

  // Manage the status of click
  isClickInside: boolean = false;

  @Output()
  valueChange = new EventEmitter<string>();

  @Input()
  get value() {
    return this.messageValue;
  }

  set value(val) {
    this.messageValue = val;
  }

  // Class inputs
  classContentTextArea: string = '';
  classInput: string = '';
  classTextArea: string = '';

  // Messages
  showMessageRequired: boolean = false;
  showMessagePattern: boolean = false;

  isFocusInput = null;

  constructor() { }

  ngOnInit(): void {
    this.getClassStylesInput(this.size);
  }

  ngAfterViewInit() {
    if (this.lazy) {
      this.listenerSearch();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.disabled) {
      this.disabled = changes.disabled.currentValue === true ? true : false;
    }
  }

  /**
   * Function listen and wait a second for emit the value
   */
  listenerSearch() {
    fromEvent(this.searchinput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      })
      , debounceTime(200)
    ).subscribe((value: string) => {
      this.keyUpInput.emit(value);
    });
  }

  getClassSizeIconRight = (type: StatesSizesInput): string => {
    let resClass = this.icon + ' ';
    if (this.isDropdown) {
      resClass += SizeIconInput.dropdown + ' ';
    }
    switch (type) {
      case 'tiny':
        return resClass += SizeIconInput.tiny;
      case 'small':
        return resClass += SizeIconInput.small;
      case 'medium':
        return resClass += SizeIconInput.medium;
      case 'large':
        return resClass += SizeIconInput.large;
      case 'giant':
        return resClass += SizeIconInput.giant;
    }
  }

  getClassStylesInput(size: StatesSizesInput) {
    this.classInput = '';
    switch (size) {
      case 'tiny':
        this.classInput += InputSyzesClass.tiny;
        break;
      case 'small':
        this.classInput += InputSyzesClass.small;
        break;
      case 'medium':
        this.classInput += InputSyzesClass.medium;
        break;
      case 'large':
        this.classInput += InputSyzesClass.large;
        break;
      case 'giant':
        this.classInput += InputSyzesClass.large;
        break;
    }
  }

  getClassStylesMessageError = (themeMessageError: StatesThemeMessage): string => {
    switch (themeMessageError) {
      case 'warning':
        return ThemeMessageClass.warning;
      case 'default':
        return ThemeMessageClass.default;
      case 'primary':
        return ThemeMessageClass.primary;
      case 'success':
        return ThemeMessageClass.succeess;
    }
  }

  getClassStylesLable = (size: StatesSizesInput): string => {
    switch (size) {
      case 'tiny':
        return LabelClass.titleTiny;
      case 'small':
      case 'medium':
        return LabelClass.titleSmall;
      case 'large':
        return LabelClass.titleLarge;
      case 'giant':
        return LabelClass.titleGiant;
    }
  }

  getClassStylesTextArea(size: StatesSizesInput) {
    this.classTextArea = '';
    switch (size) {
      case 'tiny':
        this.classTextArea += TextAreaClass.tiny;
        break;
      default:
        this.classTextArea += TextAreaClass.tiny;
    }
    if (this.disabled === true) {
      this.classTextArea += TextAreaClass.disabled;
    }
  }

  focus = (): string => {
    this.classContentTextArea = TextAreaClass.focus;
    return '';
  }

  focusOut = (): string => {
    this.classContentTextArea = '';
    return '';
  }

  changeTextInput = (value) => {
    // Set values
    this.messageValue = value;
    this.valueChange.emit(value);
    if (!this.lazy) {
      this.keyUpInput.emit(value);
    }

    this.getClassStylesInput(this.size);
    this.getClassStylesTextArea(this.size);

    // Validate required
    if (this.required === true) {
      if (!value || value.length === 0) {
        this.classTextArea += TextAreaClass.error;
        this.classInput += ' content__input-container__input--error';
        this.showMessageRequired = true;
      } else {
        this.showMessageRequired = false;
      }
    }

    // Validate pattern
    this.showMessagePattern = false;
    if (!this.showMessageRequired && this.pattern && !this.pattern.test(value)) {
      if (this.required === true && (!this.value || this.value.length > 0)) {
        this.classTextArea += TextAreaClass.error;
        this.classInput += ' content__input-container__input--error';
        this.showMessagePattern = true;
      } else if (this.required === false) {
        this.classTextArea += TextAreaClass.error;
        this.classInput += ' content__input-container__input--error';
        this.showMessagePattern = true;
      }
    }
  }

  /**
   * Function render when is focus and click outside of this
   * @param $event event when the textArea is focus
   */
  onFocus($event = null) {
    this.isFocusInput = null;
    if ($event) {
      this.isFocusInput = true;
    }
  }

  /**
   * Function execute when click outside and inside input
   */
  clickOutsideContent() {
    if (this.isClickInside) {
      this.changeTextInput(this.value);
      this.isClickInside = false;
      this.outputClickOutside.emit(true);
    }
  }

  /**
   * Function execute when click in input
   */
  clickInsideContent() {
    this.isClickInside = true;
  }
}

type StatesSizesInput = 'tiny' | 'small' | 'medium' | 'large' | 'giant';
type StatesThemeMessage = 'warning' | 'default' | 'primary' | 'success';

class LabelClass {
  static readonly titleTiny = 'content__title--tiny';
  static readonly titleSmall = 'content__title--small';
  static readonly titleLarge = 'content__title--large';
  static readonly titleGiant = 'content__title--giant';
}

class ThemeMessageClass {
  static readonly warning = 'content__messageError--warning';
  static readonly default = 'content__messageError--default';
  static readonly primary = 'content__messageError--primary';
  static readonly succeess = 'content__messageError--success';
}

class TextAreaClass {
  static readonly tiny = 'content__input-container__input--textarea--tiny';
  static readonly default = 'content__input-container__input--textarea';
  static readonly error = '  content__input-container__input--error';
  static readonly disabled = ' content__contentTextArea--disabled';
  static readonly focus = 'content__contentTextArea--focus';
}

class InputSyzesClass {
  static readonly tiny = 'content__input-container__input--tiny';
  static readonly small = 'content__input-container__input--small';
  static readonly medium = 'content__input-container__input--medium';
  static readonly large = 'content__input-container__input--large';
  static readonly error = ' content__input-container__input--error';
}

class SizeIconInput {
  static readonly tiny = 'content__input-container__icon--tiny';
  static readonly small = 'content__input-container__icon--small';
  static readonly medium = 'content__input-container__icon--medium';
  static readonly large = 'content__input-container__icon--large';
  static readonly giant = 'content__input-container__icon--giant';
  static readonly dropdown = 'content__input-container__icon--dropdown';
}
