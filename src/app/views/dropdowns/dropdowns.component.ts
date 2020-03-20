import { Component, OnInit } from '@angular/core';
import { CheckItem } from 'src/app/interfaces/check-item';
import { RadioItem } from 'src/app/interfaces/radio-item';
import { DropdownItem } from 'src/app/interfaces/dropdown-item';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss']
})
export class DropdownsComponent implements OnInit {

  constructor() { }
  selectedMenu1: number = 1;
  itemsMenu1: Array<DropdownItem> = [
    {
      id: 1,
      left: false,
      right: false,
      disabled: false,
      title: 'Menu item'
    },
    {
      id: 2,
      left: false,
      right: false,
      disabled: false,
      title: 'Menu item 2'
    },
    {
      id: 3,
      left: false,
      right: false,
      disabled: true,
      title: 'Menu item 3'
    }
  ];

  selectedMenu2: number = 1;
  itemsMenu2: Array<DropdownItem> = [
    {
      id: 1,
      left: {
        type: 'avatar',
        src: "../../../assets/images/avatar.jpg"
      },
      right: false,
      disabled: false,
      title: 'Title 1',
      subTitle: 'Sub title',
    },
    {
      id: 2,
      left: {
        type: 'avatar',
        src: "../../../assets/images/avatar.jpg"
      },
      right: false,
      disabled: true,
      title: 'Title 2',
      subTitle: 'Sub title',
    },
    {
      id: 3,
      left: {
        type: 'avatar',
        src: "../../../assets/images/avatar.jpg"
      },
      right: false,
      disabled: false,
      title: 'Title 3',
      subTitle: 'Sub title',
    }
  ];

  selectedMenu3: number = 3;
  itemsMenu3: Array<DropdownItem> = [
    {
      id: 1,
      left: false,
      right: {
        type: 'icon',
        name: 'icon-archive'
      },
      disabled: false,
      title: 'Title 1',
      subTitle: 'Sub title',
    },
    {
      id: 2,
      left: {
        type: 'icon',
        name: 'icon-battery'
      },
      right: false,
      disabled: true,
      title: 'Title 2',
      subTitle: '',
    },
    {
      id: 3,
      left: {
        type: 'icon',
        name: 'icon-settings-2'
      },
      right: {
        type: 'icon',
        name: 'icon-attach-2'
      },
      disabled: false,
      title: 'Title 3',
      subTitle: 'Sub title',
    }
  ];

  itemsMenu4: Array<DropdownItem> = [
    {
      id: 1,
      left: false,
      right: false,
      disabled: false,
      title: 'Menu item',
      subTitle: 'Informatión',
      info: 'NGH152',
      typeInfo: 'default'
    },
    {
      id: 2,
      left: false,
      right: false,
      disabled: false,
      title: 'Menu item',
      subTitle: '',
      info: 'Facturado',
      typeInfo: 'active'
    },
    {
      id: 3,
      left: false,
      right: false,
      disabled: false,
      title: 'Title 2',
      subTitle: 'Sub title',
      info: 'NGH152',
      typeInfo: 'default'
    }
  ];

  checkboxes: Array<CheckItem> = [
    { id: 1, label: 'Label 1', state: 'checked', disabled: false },
    { id: 2, label: 'Label 2', state: 'checked', disabled: true },
    { id: 3, label: 'Label 3', state: 'unchecked', disabled: true }
  ];


  radios: Array<RadioItem> = [
    { id: 1, label: 'Label 1', disabled: false },
    { id: 2, label: 'Label 2', disabled: false },
    { id: 3, label: 'Label 3', disabled: false },
    { id: 4, label: 'Label 4', disabled: true }
  ];
  selectIdRadio = 1;

  changeItemMenu1 = (item): void => {
    this.selectedMenu1 = item;
  }

  changeItemMenu2 = (item): void => {
    this.selectedMenu2 = item;
  }

  changeItemMenu3 = (item): void => {
    this.selectedMenu3 = item;
  }

  changeCheckbox = (data): void => {
    let check = this.checkboxes.find((check) => data.id == check.id);
    check.state = data.state;
  }

  changeRadio = (data): void => {
    this.selectIdRadio = data;
  }

  ngOnInit(): void {

  }
}
