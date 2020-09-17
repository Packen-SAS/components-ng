import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { SelectItem } from '../../interfaces/select-item';

@Component({
  selector: 'lib-packen-select',
  templateUrl: './packen-select.component.html',
  styleUrls: ['./packen-select.component.scss']
})
export class PackenSelectComponent implements OnInit, OnChanges {

  @Input() items: SelectItem[] = [];
  @Input() subtitle: string;
  @Input() disabled: boolean;
  @Input() selectedId: number;
  allowSelect: boolean;
  classDisabled: string;

  @Output() outputClick: EventEmitter<SelectItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.applyDisabled(changes.disabled?.currentValue);
  }

  /**
   * Método para validar si aplicar el disabled o no
   * @param disabled Flag que indica si esta disabled o no
   */
  applyDisabled(disabled: boolean) {
    this.allowSelect = true;
    this.classDisabled = '';
    if (disabled) {
      this.disabledCategory();
    }
  }

  /**
   * Método para deshabilitar una caja de categoria
   */
  disabledCategory() {
    this.allowSelect = false;
    this.classDisabled = ' box-license__category-ctn__category--disabled';

    if (this.selectedId) {
      this.setSelectedOption({ id: this.selectedId, name: '', description: '' });
    }
  }

  /**
   * Método para emitir la opcion seleccionada
   * @param item El item seleccionado
   */
  selectOption(item: SelectItem) {
    if (this.allowSelect) {
      this.setSelectedOption(item);
      this.outputClick.emit(item);
    }
  }

  /**
   * Método para seleccionar una opcion
   * @param itemSel La opcion a seleccionar
   */
  setSelectedOption(itemSel: SelectItem) {
    this.items.forEach(item => {
      item.selected = false;
      if (item.id === itemSel.id) {
        item.selected = true;
      }
    });
  }

  /**
   * Método para definir la clase de la opcion
   * @param item La opcion a validar
   */
  getItemClass(item: SelectItem) {
    if (this.disabled) {
      this.disabledCategory();
    }

    if (item.selected) {
      return 'box-license__category-ctn__category category--selected' + this.classDisabled;
    }
    return 'box-license__category-ctn__category' + this.classDisabled;
  }

}
