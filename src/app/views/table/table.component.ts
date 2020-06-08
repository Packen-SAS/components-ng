import { Component, OnInit } from '@angular/core';
import { TableRow,listTable } from '../../interfaces/table-item';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  mocklistForTable: TableRow[];

  constructor() { }

  ngOnInit() {
    this.mocklistForTable = listTable;
  }

  /**
   * Método para obtener la información a mostrar en la tabla
   * @param numPage El numero de pagina a obtener
   */
  getListFromBackend(numPage: number) {
    console.log("Page: ", numPage);
  }

}
