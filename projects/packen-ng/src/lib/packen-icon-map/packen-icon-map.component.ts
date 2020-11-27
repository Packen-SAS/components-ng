import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-packen-icon-map',
  templateUrl: './packen-icon-map.component.html',
  styleUrls: ['./packen-icon-map.component.scss']
})
export class PackenIconMapComponent implements OnInit {

  @Input() color: string = '';
  @Input() icon: string = 'icon-toll';
  @Input() label: string = '';
  @Input() value: string = '';

  colorObject: Object = {};

  constructor() { }

  ngOnInit(): void {
    if (this.color) {
      this.loadColor();
    }
  }

  /**
   * Método carga el color del icono
   */
  loadColor() {
    this.colorObject = { color: this.color }
  }
}


