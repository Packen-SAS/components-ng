import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-packen-date',
  templateUrl: './packen-date.component.html',
  styleUrls: ['./packen-date.component.scss']
})
export class PackenDateComponent implements OnInit, OnChanges {

  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() border: boolean = true;
  @Input() placeholder: string;
  @Input() isMobile: boolean = false;
  @Input() minDate: Date;
  @Input() maxDate: Date;
  @Input() label: string;
  @Input() phantom: boolean = false;

  @Input() idiom: any = {
    firstDayOfWeek: 0,
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
    dayNamesMin: ['Dm', 'Ln', 'Mt', 'Mr', 'Jv', 'Vr', 'Sa'],
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Hoy',
    clear: 'Limpiar',
    dateFormat: 'dd/mm/yy',
    weekHeader: 'Wk'
  };

  classStyle: string;
  classDisabled: string = '';
  dateValue: Date;

  @Output() valueChange = new EventEmitter<Date>();

  @Input()
  get value() {
    return this.dateValue;
  }

  set value(val) {
    this.dateValue = val;
    this.valueChange.emit(this.dateValue);
  }

  constructor() { }

  ngOnInit(): void {
    this.getStyleInputCalendar();
    this.getClassDisable(this.disabled);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.disabled) {
      this.getClassDisable(this.disabled);
    }
  }

  /**
   * Método para obtener la clase cuando es disabled
   * @param disabled Flag que indica si es disabled o no
   */
  getClassDisable(disabled: boolean) {
    this.classDisabled = '';
    if (disabled) {
      this.classDisabled = 'calendar-ctn--disabled';
    }
  }

  /**
   * Método para obtener las estilos de los inputs de calendar
   */
  getStyleInputCalendar() {
    this.classStyle = 'without-border';
    if (this.border) {
      this.classStyle = 'with-border';
    }
  }

}
