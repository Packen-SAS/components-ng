import { Component, OnInit } from '@angular/core';
import { TableRow,listTable, listHeaders } from '../../interfaces/table-item';
import { TableHeader } from 'projects/packen-ng/src/interfaces/table-item';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  mocklistForTable: TableRow[];
  mocklistHeaders: TableHeader[];

  constructor() { }

  ngOnInit() {
    this.mocklistHeaders = listHeaders;
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
