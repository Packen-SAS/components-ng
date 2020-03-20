import { Component, OnInit } from '@angular/core';
import {CheckItem} from '../../interfaces/check-item';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  checkboxes: Array<CheckItem> = [
    { id: 1, label: 'Label 1', state: 'checked', disabled: false },
    { id: 2, label: 'Label 2', state: 'checked', disabled: true },
    { id: 3, label: 'Label 3', state: 'unchecked', disabled: true }
  ];
  
  constructor() { }
  
  ngOnInit(): void {
  }

  changeStateCheckBox = (check) =>{
    let checkboxCambio = this.checkboxes.find((c) => c.id === check.id);
    checkboxCambio.state = check.state;     
  }
}
