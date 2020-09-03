import { Component, OnInit } from '@angular/core';
import { CheckItem } from '../../interfaces/check-item';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  checkboxes: Array<CheckItem> = [
    { id: 1, label: 'Label 1', state: 'checked', disabled: false },
    { id: 2, label: 'Label 2', state: 'checked', disabled: false },
    { id: 4, label: 'Label 3sfsdafasdfsdfa', state: 'unchecked', disabled: false },
    { id: 5, label: 'Label 3 aaaaa', state: 'unchecked', disabled: false },
    { id: 6, label: 'Label 3', state: 'unchecked', disabled: false },
    { id: 7, label: 'Label 3', state: 'unchecked', disabled: false },
    { id: 8, label: 'Label fdsfas', state: 'unchecked', disabled: false },
    { id: 9, label: 'Label 3 fasdfsadfsdd', state: 'unchecked', disabled: false },
    { id: 10, label: 'Label 3 sdfsadfas', state: 'unchecked', disabled: false },
    { id: 11, label: 'Label 3', state: 'unchecked', disabled: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeCheckBox(data) {
    console.log(data);
  }

}
