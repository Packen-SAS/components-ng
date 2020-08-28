import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CheckItem } from '../../interfaces/check-item';

@Component({
  selector: 'lib-packen-checkbox',
  templateUrl: './packen-checkbox.component.html',
  styleUrls: ['./packen-checkbox.component.scss']
})
export class PackenCheckboxComponent implements OnInit {

  @Input() checkboxes: Array<CheckItem> = [];
  @Input() orientation: string = 'vertical';

  @Output() valuesChange = new EventEmitter<any>();

  @Input()
  get values() {
    return this.temporaryValues;
  }
  set values(val) {
    this.temporaryValues = val;
    this.valuesChange.emit(this.temporaryValues);
  }

  temporaryValues: any = null;

  constructor() { }

  ngOnInit(): void {
  }

  getClassIcon = (state: StatesChecks): string => {
    switch (state) {
      case 'checked':
        return IconsCheck.checked;
      case 'unchecked':
        return IconsCheck.unchecked;
    }
  }

  changeStateCheck = (check: CheckItem) => {
    if (!check.disabled) {
      let newStatus = '';
      if (check.state === 'checked') {
        newStatus = 'unchecked';
      } else {
        newStatus = 'checked';
      }

      this.values.forEach((item: CheckItem) => {
        if (item.id === check.id) {
          item.state = newStatus;
        }
      });

      this.temporaryValues = this.values;
      this.valuesChange.emit(this.temporaryValues);
    }
  }

  getClassCheckBox = (c: CheckItem): string => {
    switch (c.state) {
      case 'checked':
        return c.disabled ? CheckBoxStyles.checkboxDisabled : CheckBoxStyles.checkboxActive;
      case 'unchecked':
        return c.disabled ? CheckBoxStyles.uncheckDisabled : CheckBoxStyles.checkboxDefault;
    }
  }
  getTypeCursor = (c: CheckItem): string => {
    return c.disabled ? CheckBoxCursorStyle.cursorDefault : CheckBoxCursorStyle.cursorPointer;
  }
}

class IconsCheck {
  static readonly checked = 'icon-checkmark';
  static readonly unchecked = '';
}

class CheckBoxStyles {
  static readonly checkboxDisabled = 'contentCheckbox__checkbox--disabled';
  static readonly checkboxActive = 'contentCheckbox__checkbox--active';
  static readonly checkboxDefault = 'contentCheckbox__checkbox--default';
  static readonly uncheckDisabled = 'contentCheckbox__checkbox--uncheckDisabled';
}

class CheckBoxCursorStyle {
  static readonly cursorDefault = 'contentCheckbox--disabled';
  static readonly cursorPointer = 'contentCheckbox--default';
}

type StatesChecks = 'checked' | 'unchecked';

