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

  @Input() bottom: number;
  @Input() width: number;

  @Output() valuesChange = new EventEmitter<any>();

  @Output() changeCheckbox = new EventEmitter<any>();

  @Input()
  get values() {
    return this.temporaryValues;
  }
  set values(val) {
    this.temporaryValues = val;
    this.valuesChange.emit(this.temporaryValues);
  }

  temporaryValues: any = null;

  classContentCheckboxes = '';

  constructor() { }

  ngOnInit(): void {
    this.contentCheckBoxes(this.orientation);
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

      const checksChecked = [];
      this.values.forEach((item: CheckItem) => {
        if (item.id === check.id) {
          item.state = newStatus;
        }

        // Add checks with state checked for emit
        if (item.state === 'checked') {
          checksChecked.push(item);
        }
      });

      this.temporaryValues = this.values;
      this.valuesChange.emit(this.temporaryValues);

      this.changeCheckbox.emit(checksChecked);
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

  /**
   * Function defines the orientation of the checkbox
   * @param orientation Defines the orientation with vertical or horizontal
   */
  contentCheckBoxes(orientation) {
    if (orientation === 'vertical') {
      this.classContentCheckboxes = 'contentCheckboxes contentCheckboxes--vertical';
    } else {
      this.classContentCheckboxes = 'contentCheckboxes contentCheckboxes--horizontal';
    }
  }

  /**
   * Function get the min-width and margin-bottom checkbox
   */
  getMinWidthAndBottom() {
    if (this.width && !this.bottom) {
      return { 'min-width': `${this.width}px` };
    } else if (this.bottom && !this.width) {
      return { 'margin-bottom': `${this.bottom}px` };
    } else if (this.width && this.bottom) {
      return { 'min-width': `${this.width}px`, 'margin-bottom': `${this.bottom}px` };
    } else {
      return {};
    }
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

