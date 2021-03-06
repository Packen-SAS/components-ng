import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { RadioItem } from '../../interfaces/radio-item';

@Component({
  selector: 'lib-packen-radio',
  templateUrl: './packen-radio.component.html',
  styleUrls: ['./packen-radio.component.scss']
})

export class PackenRadioComponent implements OnInit, OnChanges {

  @Input() radios: Array<RadioItem> = [];
  @Input() selectedItemId: number = 0;
  @Input() orientation: string = 'vertical';
  @Input() disabled: boolean = false;
  @Input() label: string;
  @Input() theme: string = '';

  @Output() changeRadio = new EventEmitter<any>();
  @Output() valueChange = new EventEmitter<any>();

  temporaryValue: any = null;

  @Input()
  get value() {
    return this.temporaryValue;
  }

  set value(val) {
    this.temporaryValue = val;
    this.valueChange.emit(this.temporaryValue);
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.disabled) {
      this.disabled = changes.disabled.currentValue === true ? true : false;
      this.radios.forEach(r => {
        this.getClassRadio(r);
      });
    }
  }

  getClassRadio = (r: RadioItem): string => {
    if (r.id === this.value) {
      return r.disabled || this.disabled ? StylesRadio.checkBoxSelectedDisabled : StylesRadio.checkBoxSelectedNotDisabled;
    } else {
      return r.disabled || this.disabled ? StylesRadio.checkBoxDefaultDisabled : StylesRadio.checkboxDefaultNotDisabled;
    }
  }

  selectRadio(radio: RadioItem) {
    if (!radio.disabled && !this.disabled) {
      this.temporaryValue = radio.id;
      this.valueChange.emit(radio.id);
      this.changeRadio.emit(radio);
    }
  }

  getClassTypeCursor = (disabled: boolean): string => {
    if (disabled || this.disabled) {
      return StyleCursor.cursorCheckboxDisabled;
    }

    let classHover = '';
    switch (this.theme) {
      case 'primary':
        classHover = 'contentRadio__primary-hover';
        break;
    }

    return StyleCursor.cursorCheckboxEnabled + ' ' + classHover;
  }

  /**
   * Método obtiene los estilos del label
   * @param radio objeto del tipo RadioItem
   */
  getClassStyleLabel(radio: RadioItem) {
    let classLevel = '';
    if (this.theme) {
      switch (this.theme) {
        case 'primary':
          classLevel = StyleLabelRadio.primary;
          break;
      }
    }

    if (radio.disabled) {
      return classLevel + ' ' + StyleLabelRadio.disabled;
    }
    return classLevel;
  }

  /**
   * Método obtiene el color del borde del radio
   */
  getClassRadioLabelBorder() {
    switch (this.theme) {
      case 'primary':
        return StyleRadioBorder.primary;
    }
  }
}

class StyleCursor {
  static readonly cursorCheckboxDisabled = 'contentRadio--disabled';
  static readonly cursorCheckboxEnabled = 'contentRadio--default';
}

class StylesRadio {
  static readonly checkBoxSelectedDisabled = 'contentRadio__radio--selected--disabled';
  static readonly checkBoxSelectedNotDisabled = 'contentRadio__radio contentRadio__radio--selected';
  static readonly checkBoxDefaultDisabled = 'contentRadio__radio--default--disabled';
  static readonly checkboxDefaultNotDisabled = 'contentRadio__radio contentRadio__radio--default';
}

class StyleLabelRadio {
  static readonly primary = 'contentRadio__label__level--color';
  static readonly disabled = 'contentRadio__label--disabled';
}

class StyleRadioBorder {
  static readonly primary = 'contentRadio__radio__level__primary';
}
