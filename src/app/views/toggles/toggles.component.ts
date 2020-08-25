import { Component, OnInit } from '@angular/core';
import { ToggleItem } from '../../interfaces/toggle-item';

@Component({
  selector: 'app-toggles',
  templateUrl: './toggles.component.html',
  styleUrls: ['./toggles.component.scss']
})
export class TogglesComponent implements OnInit {

  toggles: Array<ToggleItem> = [
    { id: 1, status: 'checked', disabled: false, onLabel: 'Si', offLabel: 'No' },
    { id: 2, status: 'unchecked', disabled: false, onLabel: 'On', offLabel: 'Off' },
    { id: 3, status: 'unchecked', disabled: true, onLabel: 'Si', offLabel: 'No' },
    { id: 4, status: 'checked', disabled: true, onLabel: 'Yes', offLabel: 'No' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeToggle = (data) => {
    const toggle = this.toggles.find((t) => t.id === data.id);
    toggle.status = data.status;
  }

}
