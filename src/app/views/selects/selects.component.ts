import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'projects/packen-ng/src/interfaces/select-item';
import { selectListMock } from 'src/app/mocks/select.mock';

@Component({
  selector: 'app-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.scss']
})
export class SelectsComponent implements OnInit {

  selectList: SelectItem[] = selectListMock;
  disabled: boolean = false;
  selectedId: number;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Método para seleccionar la opcion elegida
   * @param option La opcion seleccionada
   */
  setSelectedOption(option: SelectItem) {
    this.selectedId = option.id;
  }

  /**
   * Método para habilitar o deshabilitar las opciones
   */
  disable() {
    this.disabled = !this.disabled;
  }

  /**
   * Método para imprimir la opcion elegida
   */
  print() {
    console.log('Selected option: ', this.selectedId);
  }

}
