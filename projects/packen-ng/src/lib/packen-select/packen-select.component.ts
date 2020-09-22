import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { of } from 'rxjs';
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
  @Input() width: number;
  @Input() height: number;
  allowSelect: boolean;
  classDisabled: string;
  styleBox: object = {};

  @Output() outputClick: EventEmitter<SelectItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.loadDimensions();
    this.setSelectedOprion();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedId) {
      this.setSelectedOprion();
    }

    this.applyDisabled(changes.disabled?.currentValue);
  }

  /**
   * Método para cargar las dimensiones de las cajas de opciones
   */
  loadDimensions() {
    if (this.width && this.height) {
      this.styleBox = { width: `${this.width}px`, height: `${this.height}px` };
    }
  }

  /**
   * Método para validar si aplicar el disabled o no
   * @param disabled Flag que indica si esta disabled o no
   */
  applyDisabled(disabled: boolean) {
    this.allowSelect = true;
    this.classDisabled = '';
    if (disabled) {
      this.disabledOption();
    }
  }

  /**
   * Método para deshabilitar una caja de opcion
   */
  disabledOption() {
    this.allowSelect = false;
    this.classDisabled = ' box-license__option-ctn__option--disabled';
    this.setSelectedOprion();
  }

  /**
   * Método para poner la opcion seleccionada si existe
   */
  setSelectedOprion() {
    if (this.selectedId) {
      this.setSelectedOption({ id: this.selectedId, name: of(''), description: '' });
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
      this.disabledOption();
    }

    if (item.selected) {
      return 'box-license__option-ctn__option option--selected' + this.classDisabled;
    }
    return 'box-license__option-ctn__option' + this.classDisabled;
  }

}
