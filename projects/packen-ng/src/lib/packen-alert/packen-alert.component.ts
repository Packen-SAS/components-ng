import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-packen-alert',
  templateUrl: './packen-alert.component.html',
  styleUrls: ['./packen-alert.component.scss']
})
export class PackenAlertComponent implements OnInit {

  @Input() color: TypeColors = '';
  @Input() title: string;
  @Output() clickClose = new EventEmitter<string>();

  colorContent: string = '';
  colorIcon: string = '';
  colorDescription: string = '';
  colorCloseIcon: string = '';

  constructor() { }

  ngOnInit(): void {
    this.loadColors(this.color);
  }

  /**
   * Metodo carga los colores a mostrar
   * @param color valor del tipo TypeColors
   */
  loadColors(color: TypeColors) {
    switch (color) {
      case ClassColors.purple:
        this.colorContent = ClassStylesContent.purple;
        this.colorIcon = ClassStylesIcon.purple;
        this.colorDescription = ClassStylesDescription.purple;
        this.colorCloseIcon = ClassStylesIconClose.purple;
        break;
      default:
        this.colorContent = '';
        this.colorIcon = '';
        this.colorDescription = '';
        this.colorCloseIcon = '';
        break;
    }
  }

  /**
   * Metodo emite cuando se a click en cerrar
   */
  closeIcon() {
    this.clickClose.emit('close');
  }
}

type TypeColors = 'purple' | '';

class ClassColors {
  static readonly purple = 'purple';
}

class ClassStylesContent {
  static readonly purple = 'con--purple';
}

class ClassStylesIcon {
  static readonly purple = 'con__sub-first__icon--purple';
}

class ClassStylesDescription {
  static readonly purple = 'con__sub-first__description--purple';
}

class ClassStylesIconClose {
  static readonly purple = 'con__close--purple';
}
