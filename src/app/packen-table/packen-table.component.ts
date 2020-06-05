import { Component, OnInit, Input } from '@angular/core';
import { ItemInfo, TableColumn, TableRow, listTable, PageItem } from '../interfaces/table-item';

@Component({
  selector: 'app-packen-table',
  templateUrl: './packen-table.component.html',
  styleUrls: ['./packen-table.component.scss']
})
export class PackenTableComponent implements OnInit {

  // Atributos de la tabla
  @Input() list: TableRow[];

  // Atributos de la paginación
  @Input() numPages: number = 40;
  listPages: PageItem[] = [];

  objectStyle = { 'transform': `translate(0px)` };
  numBase = 5;
  transition = 0;

  constructor() { }

  ngOnInit() {
    this.list = listTable;
    this.createPagesList();
  }

  /**
   * Método para crear lista de numeros de la paginación
   */
  createPagesList() {
    for (let i = 0; i < this.numPages; i++) {
      const page = new PageItem();
      page.num = i + 1;
      page.classes = "pagination_item";

      if (i == 0) {
        page.classes += " page-active";
      }
      this.listPages.push(page);
    }
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

  /**
   * Método para poner el page activo
   * @param item El item page a activar
   */
  setActiveItem(item: PageItem) {
    this.listPages.forEach(page => {
      if (page.num == item.num) {
        page.classes = "pagination_item page-active";
      } else {
        page.classes = "pagination_item";
      }
    });

    const minbase = 5;
    if (item.num > minbase) {
      if (item.num < this.numBase) {
        this.transition += 80;
      } else {
        this.transition -= 80;
      }
    } else if (this.numBase > minbase) {
      this.transition += 80;
    }
    this.numBase = item.num;
    this.objectStyle = { 'transform': `translate(${this.transition}px)` };
  }

}
