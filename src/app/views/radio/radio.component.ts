import { Component, OnInit } from '@angular/core';
import { RadioItem } from '../../interfaces/radio-item';
@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  selectedItemId: number = 1;

  radios: Array<RadioItem> = [
    { id: 1, label: 'Label 1', disabled: false },
    { id: 2, label: 'Label 2', disabled: false },
    { id: 3, label: 'Label 3', disabled: false },
    { id: 4, label: 'Label 4', disabled: true }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeRadio(value) {
    this.selectedItemId = value;
  }

}
