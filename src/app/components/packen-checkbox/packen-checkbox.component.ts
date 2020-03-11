import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CheckItem} from '../../interfaces/check-item';
@Component({
  selector: 'app-packen-checkbox',
  templateUrl: './packen-checkbox.component.html',
  styleUrls: ['./packen-checkbox.component.scss']
})
export class PackenCheckboxComponent implements OnInit {
  @Input() checkboxes: Array<CheckItem> = [];
  @Input() orientation: string = 'vertical';
  @Output() outputChangeCheck = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  getClassIcon = (state: StatesChecks): string => {
    switch (state) {
      case 'checked':
        return IconsCheck.checked;
      case 'unchecked':
        return IconsCheck.unchecked
      default:
        return IconsCheck.unchecked;
    }
  }

  changeStateCheck = (check) => {
    if (!check.disabled) {
      let newStatus = '';
      if (check.state === 'checked') {
        newStatus = 'unchecked';
      } else {
        newStatus = 'checked';
      }
      this.outputChangeCheck.emit({ id: check.id, state: newStatus });
    }

  }

  getClassCheckBox = (c): string => {
    switch (c.state) {
      case 'checked':
        return c.disabled ? CheckBoxStyles.checkboxDisabled : CheckBoxStyles.checkboxActive;
      case 'unchecked':
        return c.disabled ? CheckBoxStyles.uncheckDisabled : CheckBoxStyles.checkboxDefault;

    }
  }

  getTypeCursor = (state: StatesChecks): string => {
    return state ? 'contentCheckbox--disabled' : 'contentCheckbox--default';
  }
}

class IconsCheck {
  static readonly checked = 'icon-checkmark';
  static readonly default = 'icon-minus';
  static readonly unchecked = '';
}

class CheckBoxStyles {
  static readonly checkboxDisabled = 'contentCheckbox__checkbox--disabled';
  static readonly checkboxActive = 'contentCheckbox__checkbox--active';
  static readonly checkboxDefault = 'contentCheckbox__checkbox--default';
  static readonly uncheckDisabled = 'contentCheckbox__checkbox--uncheckDisabled';
}

type StatesChecks = 'checked' | 'unchecked';

