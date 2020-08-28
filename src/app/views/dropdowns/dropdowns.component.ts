import { Component, OnInit } from '@angular/core';
import { CheckItem } from 'src/app/interfaces/check-item';
import { RadioItem } from 'src/app/interfaces/radio-item';
import { DropdownItem } from 'src/app/interfaces/dropdown-item';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss']
})
export class DropdownsComponent implements OnInit {

  selectedMenuTest: any;
  selectedMenu1: number = 2;
  itemsMenu1: Array<DropdownItem> = [{"id":1,"left":false,"right":false,"disabled":false,"title":"EMPRESAS PÚBLICAS DE MEDELLÍN DEPARTAMENTO MÉDICO"},{"id":2,"left":false,"right":false,"disabled":false,"title":"FONDO DE FERROCARRILES NACIONALES DE COLOMBIA (EPS)"},{"id":3,"left":false,"right":false,"disabled":false,"title":"ALIANSALUD EPS (ANTES COLMÉDICA)"},{"id":4,"left":false,"right":false,"disabled":false,"title":"SALUD TOTAL"},{"id":5,"left":false,"right":false,"disabled":false,"title":"CAFESALUD"}]

  selectedMenu2: number = 1;
  itemsMenu2: Array<DropdownItem> = [
    {
      id: 1,
      left: {
        type: 'avatar',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/1024px-Missing_avatar.svg.png'
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
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/1024px-Missing_avatar.svg.png'
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
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/1024px-Missing_avatar.svg.png'
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

  selectMenuRadio;
  selectIdRadio = 1;
  radios: Array<RadioItem> = [
    { id: 1, label: 'Label 1', disabled: false },
    { id: 2, label: 'Label 2', disabled: false },
    { id: 3, label: 'Label 3', disabled: false },
    { id: 4, label: 'Label 4', disabled: true }
  ];

  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }

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
    const check = this.checkboxes.find(ch => data.id === ch.id);
    check.state = data.state;
  }

  changeRadio = (data): void => {
    this.selectIdRadio = data;
  }

  keyUpDropdown(value) {
    this.api.getListHealtEntities(value).subscribe((data: any) => {
      let temporaryData = []
      data.data.forEach((item) => {
        let dropdownObject = { id: item.id, left: false, right: false, disabled: false, title: item.name };
        temporaryData.push(dropdownObject);
      });
      this.itemsMenu1 = temporaryData;
      console.log(JSON.stringify(this.itemsMenu1));
    });

  }
}
