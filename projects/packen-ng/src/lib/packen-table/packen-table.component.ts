import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemInfo, TableColumn, TableRow, TableHeader } from '../../interfaces/table-item';

@Component({
  selector: 'lib-packen-table',
  templateUrl: './packen-table.component.html',
  styleUrls: ['./packen-table.component.scss']
})
export class PackenTableComponent implements OnInit {

  // Atributos de la tabla
  @Input() headers: TableHeader[] = [];
  @Input() list: TableRow[] = [];
  @Input() showLoading: boolean;
  @Input() emptyText: string;
  @Output() selectRow = new EventEmitter<TableRow>();
  spanFoot: number;

  // Atributos de la paginación
  @Output() changePage = new EventEmitter<number>();
  @Input() pagination: string = 'pag-right';
  @Input() numPages: number;
  listPages: PageItem[] = [];
  activePage: PageItem;

  objectStyle = { transform: `translate(0px)` };
  baseMin = 1;
  baseMax = 7;
  transition = 0;

  constructor() { }

  ngOnInit() {
    this.createPagesList();
  }

  /**
   * Método para crear lista de numeros de la paginación
   */
  createPagesList() {
    this.spanFoot = this.headers.length + 1;
    for (let i = 0; i < this.numPages; i++) {
      const page = new PageItem();
      page.num = i + 1;
      page.classes = 'pagination_item';

      if (i === 0) {
        page.classes += ' page-active';
        this.activePage = Object.assign({}, page);
      }
      this.listPages.push(page);
    }
  }

  /**
   * Método para definir estilos adicionales en mobile
   * @param item El item a evaluar
   */
  getPropertyStyle(item: ItemInfo) {
    let cap = '';
    if (item.capitalize) {
      cap = ' capitalize';
    }

    if (item.value) {
      if (item.style === 'blue-box') {
        return ' blue-box' + cap;
      } else if (item.style === 'gray-box') {
        return ' gray-box' + cap;
      } else if (item.style === 'blue-gray-box') {
        return ' blue-gray-box' + cap;
      } else if (item.style === 'purple-box') {
        return ' purple-box' + cap;
      } else if (item.style === 'green-vivid-box') {
        return ' green-vivid-box' + cap;
      } else if (item.style === 'red-vivid-box') {
        return ' red-vivid-box' + cap;
      } else if (item.style === 'red-off-box') {
        return ' red-off-box' + cap;
      } else if (item.style === 'green-off-box') {
        return ' green-off-box' + cap;
      }
    }

    if (item.key) {
      return 'box-def' + cap;
    }
    return '' + cap;
  }

  /**
   * Método para definir estilos adicionales en desktop
   * @param item El item a evaluar
   */
  getPropertyDesktopStyle(item: ItemInfo) {
    let cap = '';
    if (item.capitalize) {
      cap = ' capitalize';
    }

    if (item.value) {
      if (item.style === 'blue-box') {
        return ' blue-box no-margin' + cap;
      } else if (item.style === 'gray-box') {
        return ' gray-box no-margin' + cap;
      } else if (item.style === 'blue-gray-box') {
        return ' blue-gray-box no-margin' + cap;
      } else if (item.style === 'purple-box') {
        return ' purple-box no-margin' + cap;
      } else if (item.style === 'green-vivid-box') {
        return ' green-vivid-box no-margin' + cap;
      } else if (item.style === 'red-vivid-box') {
        return ' red-vivid-box no-margin' + cap;
      } else if (item.style === 'red-off-box') {
        return ' red-off-box no-margin' + cap;
      } else if (item.style === 'green-off-box') {
        return ' green-off-box no-margin' + cap;
      }
    }

    if (item.key && item.showInDesktop) {
      return 'left-margin' + cap;
    }
    return '' + cap;
  }

  /**
   * Método para obtener el estilo de una columna
   * @param column La columna a dar el estilo
   */
  getClassTextItem(column: TableColumn) {
    let style = 'table-mobile_content_section_box';
    if (column.headInMobile || column.hideInMobile) {
      style += ' hide';
    }
    return style;
  }

  /**
   * Método para obtener el estilo de un td en desktop
   * @param index EL indice del contenido a evaluar
   * @param item El item a evaluar
   */
  getClassTdDesktop(index: number, item: ItemInfo) {
    let style = 'table-desktop_td_text';
    if (index === 0) {
      style += ' first-text';
    } else {
      style += ' others-text';
    }

    if (item.hideInDesktop) {
      style += ' hide';
    }
    return style;
  }

  /**
   * Método para obtener la clase de posicionamiento de paginacion
   */
  getClassPagination() {
    return 'pagination-main ' + this.pagination;
  }

  /**
   * Método para mover la pagina a la derecha
   */
  movePageToRight() {
    if (this.activePage.num !== this.listPages.length) {
      const pageTemp = new PageItem();
      pageTemp.num = this.activePage.num + 1;
      this.setActivePage(pageTemp);
    }
  }

  /**
   * Método para mover la pagina a la izquierda
   */
  movePageToLeft() {
    if (this.activePage.num !== 1) {
      const pageTemp = new PageItem();
      pageTemp.num = this.activePage.num - 1;
      this.setActivePage(pageTemp);
    }
  }

  /**
   * Método para poner el page activo
   * @param item El item page a activar
   */
  setActivePage(item: PageItem) {
    if (item.num !== this.activePage.num) {
      this.activePage = Object.assign({}, item);

      this.listPages.forEach(page => {
        if (page.num === item.num) {
          page.classes = 'pagination_item page-active';
        } else {
          page.classes = 'pagination_item';
        }
      });

      if (item.num === this.baseMax) {
        this.baseMin = this.baseMax;
        this.baseMax = this.baseMax + 5;
        this.transition -= 140;
        this.objectStyle = { transform: `translate(${this.transition}px)` };
      } else if (item.num === (this.baseMin - 1) && item.num !== 1) {
        this.baseMax = this.baseMin;
        this.baseMin = this.baseMin - 5;
        this.transition += 140;
        this.objectStyle = { transform: `translate(${this.transition}px)` };
      }

      this.changePage.emit(this.activePage.num);
    }
  }

  /**
   * Método para emitir la fila seleccionada
   * @param row La fila seleccionada
   */
  sendSelectRow(row: TableRow) {
    this.selectRow.emit(row);
  }

}

class PageItem {
  num: number;
  classes: string;
}
