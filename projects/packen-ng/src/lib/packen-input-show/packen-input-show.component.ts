import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-packen-input-show',
  templateUrl: './packen-input-show.component.html',
  styleUrls: ['./packen-input-show.component.scss']
})
export class PackenInputShowComponent implements OnInit, OnChanges {

  @Input() icon: string = '';
  @Input() color: StatesColorMessage = '';
  @Input() type: TypeSourceImgIcon = 'icon';
  @Input() url: string = '';
  @Input() labelPosition: TypelabelPosition = 'bottom';
  @Input() showSee: boolean = false;
  @Input() showEdit: boolean = false;
  @Input() isDropdown: boolean = false;
  @Input() phantom: boolean = false;

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() label: string = '';
  @Input() message: string = '';

  @Output() clickSee = new EventEmitter<string>();
  @Output() clickEdit = new EventEmitter<string>();

  colorMessage: string = '';
  widthContentDataClass: string = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.color) {
      this.getColorMessage(this.color);
    }
  }

  ngOnInit(): void {
    this.getColorMessage(this.color);
    this.getWidthContentData();
  }

  /**
   * Metodo asigna el color dependiendo del valor Input(color);
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
   * Metodo emite la palabra 'see' cuando da click en el ojo
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
   * Metodo para definir si el fondo es transparente o no
   */
  getBackgroundClass() {
    return this.phantom ? 'cnt--phantom' : '';
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
