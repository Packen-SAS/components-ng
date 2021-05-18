import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-packen-counter',
  templateUrl: './packen-counter.component.html',
  styleUrls: ['./packen-counter.component.scss']
})
export class PackenCounterComponent implements OnInit {

  numberValue: number;

  @Output() valueChange = new EventEmitter<any>();
  @Input()
  get value() {
    return this.numberValue;
  }
  set value(val) {
    this.numberValue = val;
    this.valueChange.emit(this.value);
  }

  @Input() min: number;
  @Input() max: number;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Función aumenta o resta al valor actual
   * @param action acción a realizar sumar o restar
   */
  addOrSubtractValue(action) {
    switch (action) {
      case 'add':
        if (this.max && this.value + 1 <= this.max) {
          this.value++;
        } else {
          if (!this.max) {
            this.value++;
          }
        }
        break;
      default:
        if (this.min && this.value - 1 >= this.min) {
          this.value--;
        } else {
          if (!this.min) {
            this.value--;
          }
        }
        break;
    }
  }
}
