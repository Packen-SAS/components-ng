import { Component, OnInit } from '@angular/core';
import { DropdownShowItem } from 'projects/packen-ng/src/interfaces/dropdown-show-item';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-inputs-show-dropdown',
  templateUrl: './dropdowns-show.component.html',
  styleUrls: ['./dropdowns-show.component.scss']
})
export class InputsShowDropdownComponent implements OnInit {

  idSelectedDropdown: number = null;
  idSelectedDropdown2: number;

  listDropdown: Array<DropdownShowItem> = [
    { id: 1, title: '1' }, { id: 2, title: '2' },
    { id: 3, title: '3' }, { id: 4, title: '4' },
    { id: 5, title: '5' }, { id: 6, title: '6' },
    { id: 7, title: '7' }, { id: 8, title: '9' },
    { id: 9, title: '9' }, { id: 10, title: '10' },
    { id: 11, title: '11' }, { id: 12, title: '12' },
    { id: 13, title: '13' }, { id: 14, title: '14' }
  ];
  listDropdown2: Array<DropdownShowItem> = [];

  disabledDropdown1: boolean = false;

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
   * Métoto funciona cuando el valor escrito cambia
   * @param value valor escrito en el componente
   */
  keyUpDropdown2(value: string) {
    this.api.getListHealtEntities(value).subscribe((resp: any) => {
      if (resp.success) {
        const data: Array<any> = resp.data;
        this.listDropdown2 = [];
        data.forEach((item) => {
          const objDropdown: DropdownShowItem = { id: item.id, title: item.name };
          this.listDropdown2.push(objDropdown);
        });
      }
    });
  }

  /**
   * Método cambia el estado de la variable disabledDropdown1
   */
  disableOrEnableDropdown1() {
    this.disabledDropdown1 = !this.disabledDropdown1;
  }

  /**
   * Métod imprime en consola el valor seleccionado
   */
  printValue() {
    console.log(this.idSelectedDropdown);
  }

  /**
   * Método valida si el dropdown tiene un valor
   * retornando para validar el boton imprimir valor
   */
  validateDropdown() {
    if (this.idSelectedDropdown) {
      return false;
    }
    return true;
  }

  /**
   * Método que se dispara cuando seleccionan un item
   * @param data Dato a mostrar
   */
  selectItem(data) {
    console.log('Selected value ', data);
  }

}
