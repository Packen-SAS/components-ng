import { Component, OnInit, Input } from '@angular/core';
import { ItemInfo, TableColumn, TableRow, listTable } from '../interfaces/table-item';

@Component({
  selector: 'app-packen-table',
  templateUrl: './packen-table.component.html',
  styleUrls: ['./packen-table.component.scss']
})
export class PackenTableComponent implements OnInit {

  @Input() list: TableRow[];

  constructor() { }

  ngOnInit() {
    this.list = listTable;
  }

  /**
   * Método para definir estilos adicionales en mobile
   * @param item El item a evaluar
   */
  getPropertyStyle(item: ItemInfo) {
    if (item.style === 'blue-box') {
      return ' blue-box';
    } else if (item.style === 'gray-box') {
      return ' gray-box';
    } else if (item.style === 'blue-gray-box') {
      return ' blue-gray-box';
    }

    if (item.key) {
      return 'box-def';
    }
    return '';
  }

  /**
   * Método para definir estilos adicionales en desktop
   * @param item El item a evaluar
   */
  getPropertyDesktopStyle(item: ItemInfo) {
    if (item.style === 'blue-box') {
      return ' blue-box no-margin';
    } else if (item.style === 'gray-box') {
      return ' gray-box no-margin';
    } else if (item.style === 'blue-gray-box') {
      return ' blue-gray-box no-margin';
    }

    if (item.key && item.showInDesktop) {
      return 'left-margin';
    }
    return '';
  }

  /**
   * Método para obtener el estilo de una columna
   * @param column La columna a dar el estilo
   */
  getClassTextItem(column: TableColumn) {
    let style = 'table-mobile_content_section_box';
    if (column.headInMobile) {
      style += ' hide';
    }
    return style;
  }

  /**
   * Método para obtener el estilo de un td en desktop
   * @param index EL indice del contenido a evaluar
   */
  getClassTdDesktop(index: number) {
    let style = "table-desktop_td_text";
    if (index == 0) {
      style += " first-text";
    } else {
      style += " others-text";
    }
    return style;
  }
}
