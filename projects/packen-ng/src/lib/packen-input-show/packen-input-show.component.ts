import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'lib-packen-input-show',
  templateUrl: './packen-input-show.component.html',
  styleUrls: ['./packen-input-show.component.scss']
})
export class PackenInputShowComponent implements OnInit, OnChanges, AfterViewInit {

  @ViewChild('searchDropdown') searchDropdown: ElementRef;

  @Input() icon: string = '';
  @Input() color: StatesColorMessage = '';
  @Input() type: TypeSourceImgIcon = 'icon';
  @Input() url: string = '';
  @Input() labelPosition: TypelabelPosition = 'bottom';
  @Input() showSee: boolean = false;
  @Input() showEdit: boolean = false;
  @Input() isDropdown: boolean = false;
  @Input() phantom: boolean = false;
  @Input() isInput: boolean = false;
  @Input() required: boolean = false;
  @Input() pattern: any = null;
  @Input() disabled: boolean = false;
  @Input() inputChildRequired: boolean = false;
  @Input() inputType: string = 'text';

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() label: string = '';
  @Input() message: string = '';
  @Input() mask: string;
  @Input() maxlength: number = 0;
  @Input() minlength: number = 0;

  // Esta entrada es cuando el componente es hijo del dropdown
  @Input() isPlaceholder: boolean = false;

  @Output() clickSee = new EventEmitter<string>();
  @Output() clickEdit = new EventEmitter<string>();
  @Output() keyUpInput = new EventEmitter<string>();

  messageValue: string = '';
  @Output()
  valueChange = new EventEmitter<string>();

  @Input()
  get value() {
    return this.messageValue;
  }

  set value(val) {
    this.messageValue = val;
    this.valueChange.emit(this.messageValue);
  }

  colorMessage: string = '';
  widthContentDataClass: string = '';
  showInput: boolean = false;

  contClass: string = '';
  subContClass: string = '';
  contError: string = '';
  titleValueInput: string = '';
  classTitleInputDisabled: string = '';
  isClicked: boolean = false;

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.titleValueInput = this.searchDropdown.nativeElement.value;
      if (!this.titleValueInput) {
        this.titleValueInput = this.title;
      }
    }, 300);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.color) {
      this.getColorMessage(this.color);
    }

    if (changes.disabled) {
      this.loadStylesComponent();
    }

    if (changes.isPlaceholder) {
      this.getColorTitlePlaceholder();
    }

    if (changes.inputChildRequired) {
      if (changes.inputChildRequired.currentValue) {
        this.contError = StatesContentClass.error;
      } else {
        this.contError = '';
      }
    }
  }

  ngOnInit(): void {
    this.getColorMessage(this.color);
    this.getWidthContentData();

    // Estilos variable cont
    this.loadStylesComponent();
  }

  /**
   * Método carga los estilos del componente
   */
  loadStylesComponent() {
    this.contClass = '';
    this.loadClassWhenIsInput();
    this.getBackgroundClass();
    this.getStylesDisabled();
  }

  /**
   * Método carga las clases para el subcontenido
   */
  loadClassWhenIsInput() {
    if (this.isInput) {
      this.contClass += StatesContentClass.isInput;
    }
  }

  /**
   * Método asigna el color dependiendo del valor Input(color);
   * @param color del tipo StatesColorMessage
   */
  getColorMessage(color: StatesColorMessage) {
    switch (color) {
      case StatesColorMessageClass.yellowOff:
        this.colorMessage = StyleColorMessage.yellowOff;
        break;
      case StatesColorMessageClass.red:
        this.colorMessage = StyleColorMessage.red;
        break;
      default:
        this.colorMessage = '';
        break;
    }
  }

  /**
   * Método emite la palabra 'see' cuando da click en el ojo
   */
  clickSeeButton() {
    this.clickSee.emit('see');
  }

  /**
   * Metodo emite la palabra 'edit' cuando da click en el lapiz
   */
  clickEditButton() {
    this.clickEdit.emit('edit');
  }

  /**
   * Método para definir el ancho cuando es tipo dropdown
   */
  getWidthContentData() {
    if (this.isDropdown) {
      this.widthContentDataClass = StatesContentClass.isDropdown;
    }
  }

  /**
   * Método para definir si el fondo es transparente o no
   */
  getBackgroundClass() {
    if (this.phantom) {
      this.contClass += StatesContentClass.phantom;
    }
  }

  /**
   * Método oculta o muestra el click, pero cuando isInput es true
   */
  showInputClick() {
    if (this.isInput && !this.disabled) {
      this.showInput = true;
      this.isClicked = true;
      setTimeout(() => {
        this.searchDropdown.nativeElement.focus();
      }, 100);
    }
  }

  /**
   * Método detecta cuando se da click fuera del contenido
   */
  clickOutsideContent() {
    this.showInput = false;
    if (this.isClicked) {
      this.isClicked = false;
      this.validateInput();
    }
  }

  /**
   * Método se ejectuta cuando se ingresa un valor en el input
   * @param value valor escrito
   */
  keyUpValue(value: string) {
    this.titleValueInput = value;
    if (value.length === 0) {
      this.titleValueInput = this.title;
    }
    this.keyUpInput.emit(value);
    this.validateInput();
  }

  /**
   * Método valida las reglas que se asignen
   */
  validateInput() {
    this.contError = '';
    if (!this.value) {
      this.contError = StatesContentClass.error;
    }
    if (this.pattern && this.value) {
      if (!this.pattern.test(this.titleValueInput)) {
        this.contError = StatesContentClass.error;
      }
    }
  }

  /**
   * Método carga los estilos disabled si disabled is true
   */
  getStylesDisabled() {
    if (this.disabled) {
      this.contClass += StatesContentClass.disabled;
    }
  }

  /**
   * Método cambia el color del titulo
   */
  getColorTitlePlaceholder() {
    this.classTitleInputDisabled = '';
    if (this.isPlaceholder) {
      this.classTitleInputDisabled = TitlePlaceholder.placeholder;
    }
  }
}

// Tipos
type StatesColorMessage = 'yellow-off' | 'red' | '';
type TypeSourceImgIcon = 'icon' | 'url';
type TypelabelPosition = 'top' | 'bottom';

// Clases
class StyleColorMessage {
  static readonly yellowOff = 'cnt__body__message--yellow-off';
  static readonly red = 'cnt__body__message--red';
}

class StatesColorMessageClass {
  static readonly yellowOff = 'yellow-off';
  static readonly red = 'red';
}

class StatesContentClass {
  static readonly error = ' cnt--error';
  static readonly disabled = ' cnt--disabled';
  static readonly phantom = ' cnt--phantom';
  static readonly isInput = ' cnt__sub--is-input';
  static readonly isDropdown = 'cnt__sub__child-first--dropdown';
}

class TitlePlaceholder {
  static readonly placeholder = 'cnt__body__title--placeholder';
}
