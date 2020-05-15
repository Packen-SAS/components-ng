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
  @Output() outputChangeRadio = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  getClassRadio = (r: RadioItem): string => {
    if (r.id == this.selectedItemId) {
      return r.disabled ? StylesRadio.checkBoxSelectedDisabled : StylesRadio.checkBoxSelectedNotDisabled;
    } else {
      return r.disabled ? StylesRadio.checkBoxDefaultDisabled : StylesRadio.checkboxDefaultNotDisabled;
    }
  }

  selectRadio(radio: RadioItem) {
    if (!radio.disabled) {
      this.outputChangeRadio.emit(radio.id);
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

