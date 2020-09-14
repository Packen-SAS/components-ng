import { Component, OnInit } from '@angular/core';
import { CheckItem } from '../../interfaces/check-item';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  checkboxes: Array<CheckItem> = [
    { id: 1, label: 'Label 1', state: 'checked', disabled: false, value: 'L2' },
    { id: 2, label: 'Label 2', state: 'checked', disabled: false, value: 'L3' },
    { id: 4, label: 'Label 3 secound', state: 'unchecked', disabled: false, value: 'L4' },
    { id: 5, label: 'Label 3 third', state: 'unchecked', disabled: false, value: 'L5' },
    { id: 6, label: 'Label 3', state: 'unchecked', disabled: false, value: 'L6' },
    { id: 7, label: 'Label 3', state: 'unchecked', disabled: false, value: 'L7' },
    { id: 8, label: 'Label fdsfas', state: 'unchecked', disabled: false, value: 'L8' },
    { id: 9, label: 'Label 3 fasdfsadfsdd', state: 'unchecked', disabled: false, value: 'L9' },
    { id: 10, label: 'Label 3 sdfsadfas', state: 'unchecked', disabled: false, value: 'L10' },
    { id: 11, label: 'Label 3', state: 'unchecked', disabled: false, value: 'L11' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeCheckBox(data) {
    console.log(data);
  }

}
