import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-packen-checkbox-single',
  templateUrl: './packen-checkbox-single.component.html',
  styleUrls: ['./packen-checkbox-single.component.scss']
})
export class PackenCheckboxSingleComponent implements OnInit {

  valueMessage: string;
  @Output()
  valueChange = new EventEmitter<string>();
  @Input()
  get value() {
    return this.valueMessage;
  }
  set value(val) {
    this.valueMessage = val;
    this.valueChange.emit(this.valueMessage);
  }

  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
    if (!this.value) {
      this.value = 'unchecked';
    }
  }

  /**
   * Función check o uncheck la caja
   */
  checkedUncheckBox() {
    if (this.value !== 'checked') {
      this.value = 'checked';
    } else {
      this.value = 'unchecked';
    }
  }

}
