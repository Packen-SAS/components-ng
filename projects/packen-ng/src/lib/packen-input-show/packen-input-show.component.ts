import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-packen-input-show',
  templateUrl: './packen-input-show.component.html',
  styleUrls: ['./packen-input-show.component.scss']
})
export class PackenInputShowComponent implements OnInit, OnChanges {

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
  @Input() isInput: boolean = true;

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() label: string = '';
  @Input() message: string = '';
  @Input() mask: string;


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

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.color) {
      this.getColorMessage(this.color);
    }
  }

  ngOnInit(): void {
    this.getColorMessage(this.color);
    this.getWidthContentData();


    // Estilos variable cont
    this.loadClassWhenIsInput();
    this.getBackgroundClass();
  }

  /**
   * Método carga las clases para el subcontenido
   */
  loadClassWhenIsInput() {
    if (this.isInput) {
      this.contClass += 'cnt__sub--is-input';
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
      this.widthContentDataClass = 'cnt__sub__child-first--dropdown';
    }
  }

  /**
   * Método para definir si el fondo es transparente o no
   */
  getBackgroundClass() {
    if (this.phantom) {
      this.contClass += 'cnt--phantom';
    }
  }

  /**
   * Método oculta o muestra el click, pero cuando isInput es true
   */
  showInputClick() {
    this.showInput = true;
    setTimeout(() => {
      this.searchDropdown.nativeElement.focus();
    }, 100);
  }


  /**
   * Método detecta cuando se da click fuera del contenido
   */
  clickOutsideContent() {
    this.showInput = false;
  }

  keyUpValue(value: string) {
    this.keyUpInput.emit(value);
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
