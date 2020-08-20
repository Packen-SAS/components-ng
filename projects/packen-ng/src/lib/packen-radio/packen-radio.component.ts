import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RadioItem } from '../../interfaces/radio-item';

@Component({
  selector: 'app-packen-radio',
  templateUrl: './packen-radio.component.html',
  styleUrls: ['./packen-radio.component.scss']
})

export class PackenRadioComponent implements OnInit {
  @Input() radios: Array<RadioItem> = [];
  @Input() selectedItemId: number = 0;
  @Input() orientation: string = 'vertical';
  @Output() changeRadio = new EventEmitter<any>();
  temporaryValue: any = null;

  @Output()
  valueChange = new EventEmitter<any>();

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

  getClassRadio = (r: RadioItem): string => {
    if (r.id == this.value) {
      return r.disabled ? StylesRadio.checkBoxSelectedDisabled : StylesRadio.checkBoxSelectedNotDisabled;
    } else {
      return r.disabled ? StylesRadio.checkBoxDefaultDisabled : StylesRadio.checkboxDefaultNotDisabled;
    }
  }

  selectRadio(radio: RadioItem) {
    if (!radio.disabled) {
      this.temporaryValue = radio.id;
      this.valueChange.emit(radio.id);
      this.changeRadio.emit(radio);
    }
  }

  getClassTypeCursor = (disabled: boolean): string => {
    return disabled ? StyleCursor.cursorCheckboxDisabled : StyleCursor.cursorCheckboxEnabled;
  }
}
class StyleCursor {
  static readonly cursorCheckboxDisabled = 'contentRadio--disabled'
  static readonly cursorCheckboxEnabled = 'contentRadio--default'
}

class StylesRadio {
  static readonly checkBoxSelectedDisabled = 'contentRadio__radio--selected--disabled';
  static readonly checkBoxSelectedNotDisabled = 'contentRadio__radio contentRadio__radio--selected';
  static readonly checkBoxDefaultDisabled = 'contentRadio__radio--default--disabled'
  static readonly checkboxDefaultNotDisabled = 'contentRadio__radio contentRadio__radio--default'
}

