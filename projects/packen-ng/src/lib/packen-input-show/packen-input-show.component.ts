import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-input-show',
  templateUrl: './packen-input-show.component.html',
  styleUrls: ['./packen-input-show.component.scss']
})
export class PackenInputShowComponent implements OnInit {

  @Input() icon: string = '';
  @Input() color: StatesColorMessage = '';
  @Input() type: TypeSourceImgIcon = 'icon';
  @Input() url: string = '';
  @Input() labelPosition: TypelabelPosition = 'bottom';
  @Input() showSee: boolean = false;
  @Input() showEdit: boolean = false;
  @Input() isDropdown: boolean = false;


  @Input() title: string = '';
  @Input() label: string = '';
  @Input() message: string = '';

  @Output() clickSee = new EventEmitter<string>();
  @Output() clickEdit = new EventEmitter<string>();
  @Output() clickContent = new EventEmitter<string>();

  colorMessage: string = '';
  contIsDropdownClass: string = '';

  constructor() { }

  ngOnInit(): void {
    this.getColorMessage(this.color);
    this.getClassContentWhenIsDropdown(this.isDropdown);
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
   * Metodo llama la clase para colocar estilos para ser un dropdown
   * @param isDropdown Define si es un componente para dropdown
   */
  getClassContentWhenIsDropdown(isDropdown: boolean) {
    if (isDropdown) {
      this.contIsDropdownClass = 'cnt--dropdown';
    }
  }
}

// Tipos
type StatesColorMessage = 'yellow-off' | '';
type TypeSourceImgIcon = 'icon' | 'url';
type TypelabelPosition = 'top' | 'bottom';

// Clases
class StyleColorMessage {
  static readonly yellowOff = 'cnt__body__message--yellow-off';
}

class StatesColorMessageClass {
  static readonly yellowOff = 'yellow-off';
}
