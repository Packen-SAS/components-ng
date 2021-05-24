import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { of } from 'rxjs';
import { SelectItem, StyleBoxSelect, StyleIconSelect } from '../../interfaces/select-item';

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
  @Input() fontSize: number;
  @Input() boldBorder: boolean;
  @Input() borderRadius: number = 4;
  @Input() iconSize: number;
  @Input() grayBack: boolean;
  @Input() outline: boolean = false;
  @Input() direction: TypeOptionsDirections = 'row';
  @Input() fullWidth: boolean = false;

  allowSelect: boolean;
  classDisabled: string;
  styleBox: StyleBoxSelect = new StyleBoxSelect();
  styleIcon: StyleIconSelect = new StyleIconSelect();

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
    this.styleBox['border-radius'] = `${this.borderRadius}px`;

    if (this.fontSize) {
      this.styleBox['font-size'] = `${this.fontSize}px`;
    }

    if (this.width) {
      this.styleBox.width = `${this.width}px`;
    }

    if (this.fullWidth) {
      this.styleBox.width = '100%';
    }

    if (this.height) {
      this.styleBox.height = `${this.height}px`;
    }

    if (this.iconSize) {
      this.styleIcon['font-size'] = `${this.iconSize}px`;
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
    } else {
      this.unselectAllOptions();
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
   * Función quita la selección de las opciones
   */
  unselectAllOptions() {
    this.items.forEach(item => {
      item.selected = false;
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

    // Clase para borde
    let classOutline = '';
    if (this.outline) {
      classOutline += 'option--outline ';
    }

    if (item.selected) {
      return 'box-license__option-ctn__option ' + (this.boldBorder ? 'option--selected-bold' : 'option--selected') + this.classDisabled;
    }
    return 'box-license__option-ctn__option ' + classOutline + (this.grayBack ? 'option--gray ' : '') + this.classDisabled;
  }

}

type TypeOptionsDirections = 'column' | 'row';
