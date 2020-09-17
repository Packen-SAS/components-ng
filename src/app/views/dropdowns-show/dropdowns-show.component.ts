import { Component, OnInit } from '@angular/core';
import { DropdownShowItem } from 'projects/packen-ng/src/interfaces/dropdown-show-item';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-inputs-show-dropdown',
  templateUrl: './dropdowns-show.component.html',
  styleUrls: ['./dropdowns-show.component.scss']
})
export class InputsShowDropdownComponent implements OnInit {

  idSelectedDropdown: number = 5;
  listDropdown: Array<DropdownShowItem> = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  /**
   * Metodo funciona cuando el valor escrito cambia
   * @param value valor escrito en el componente
   */
  keyUpDropdown(value: string) {
    this.api.getListHealtEntities(value).subscribe((resp: any) => {
      if (resp.success) {
        const data: Array<any> = resp.data;
        this.listDropdown = [];
        data.forEach((item) => {
          const objDropdown: DropdownShowItem = { id: item.id, title: item.name };
          this.listDropdown.push(objDropdown);
        });
      }
    });
  }

  /**
   * Metodo funciona cuando se selecciona un item del dropdown
   * @param item objeto del tipo DropdownShowItem
   */
  changeValue(item: DropdownShowItem) {
    console.log(item);
  }
}

