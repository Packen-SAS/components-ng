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

  listDropdown: Array<DropdownShowItem> = [];
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
}
