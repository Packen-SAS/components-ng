import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-packen-rating',
  templateUrl: './packen-rating.component.html',
  styleUrls: ['./packen-rating.component.scss']
})
export class PackenRatingComponent implements OnInit {
  @Input() fontSize: number = 10;
  @Input() paddingRight: number = 3;
  @Input() readonly: boolean = false;
  @Input() numberStars: number = 5;

  // Administración de la variable value
  temporaryValue: number;
  @Input()
  get value() {
    return this.temporaryValue;
  }
  set value(val) {
    this.temporaryValue = val;
  }

  @Output() valueChange = new EventEmitter<any>();

  stylesStart: object = {};
  classEditableStar: string = '';
  hovered: boolean = false;
  stars = [];

  constructor() { }

  ngOnInit(): void {
    for (let index = 1; index <= this.numberStars; index++) {
      const objStar = { position: index, class: '' };
      this.stars.push(objStar);
    }

    this.loadStylesStart();
    if (this.value) {
      this.loadColorsStars(this.value);
    }
  }

  /**
   * Método cambia de color a las estrellas anteriores cuando esta el metodo hover
   * @param position posición de la estrella
   */
  setColorStar(position) {
    if (!this.readonly) {
      this.hovered = true;
      this.loadColorsStars(position);
    }
  }

  /**
   * Método carga los estilos de la estrella
   */
  loadStylesStart() {
    if (!this.readonly) {
      this.classEditableStar = 'stars__item--editable';
    }
    this.stylesStart = { 'font-size': `${this.fontSize}px`, 'padding-right': `${this.paddingRight}px` };
  }

  /**
   * Método quita los colores a las estrellas
   * cuando ninguna se selecciono
   */
  removeColorStar() {
    if (this.hovered) {
      this.hovered = false;
      if (this.value) {
        this.setColorStar(this.value);
      } else {
        this.setColorStar(0);
      }
    }
  }

  /**
   * Método asigna el valor seleccionado
   * @param value valor del 1 al 5
   */
  selectStarValue(value) {
    if (!this.readonly) {
      this.value = value;
      this.valueChange.emit(value);
    }
  }

  /**
   * Método asigna los colores amarillos dependiendo del valor
   * @param position numero del 1 al 5
   */
  loadColorsStars(position: number) {
    this.resetColorStars();
    for (let index = 0; index < position; index++) {
      this.stars[index].class = 'stars__item--selected';
    }
  }

  /**
   * Método deja todas las estrellas sin clase
   */
  resetColorStars() {
    this.stars.forEach((star: any) => {
      star.class = '';
    });
  }
}
