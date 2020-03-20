import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToggleItem } from '../../interfaces/toggle-item';

@Component({
  selector: 'app-packen-toggle',
  templateUrl: './packen-toggle.component.html',
  styleUrls: ['./packen-toggle.component.scss']
})
export class PackenToggleComponent implements OnInit {
  @Input() toggles: Array<ToggleItem> = [];
  @Input() orientation: string = 'vertical';
  @Output() outputChangeToggle = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void { }


  getClassStylesColor = (t:ToggleItem):string => {
    if (t.disabled) {
      return StylesColorToggle.toggleDisabled;
    } else {
      return StylesColorToggle.toggleDefault;
    }
  }

  changeToggle = (toggle: ToggleItem) =>{
    if (!toggle.disabled) {
      let newState: string = '';
      if (toggle.status === 'checked') {
        newState = 'unchecked';
      } else {
        newState = 'checked';
      }
      this.outputChangeToggle.emit({ status: newState, id: toggle.id });
    }
  }
}

class StylesColorToggle {
  static readonly toggleDisabled = 'switch__slider--disabled';
  static readonly toggleDefault = 'switch__slider--default';
}
