import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-inputs-show-dropdown',
  templateUrl: './inputs-show-dropdown.component.html',
  styleUrls: ['./inputs-show-dropdown.component.scss']
})
export class InputsShowDropdownComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  idSelectedDropdown: number = 5;
  listDropdown: any = [];

  /**
   * Metodo funciona cuando el valor escrito cambia
   * @param value valor escrito en el componente
   */
  keyUpDropdown(value: string) {
    console.log(value);
    this.api.getListHealtEntities(value).subscribe((resp: any) => {
      if (resp.success) {
        const data: Array<any> = resp.data;
        this.listDropdown = [];
        data.forEach((item, index) => {
          const objDropdown = { id: item.id, title: item.name };
          this.listDropdown.push(objDropdown);
        });
      }
    });
  }
}

