import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs-show',
  templateUrl: './inputs-show.component.html',
  styleUrls: ['./inputs-show.component.scss']
})
export class InputsShowComponent implements OnInit {
  imgTest: string = 'https://cdn.pixabay.com/photo/2020/08/23/15/32/monkey-5511150_960_720.jpg';
  testMessage: string = '';
  titleInput = 'AAA-000';
  valueInput: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Emite cuando se da click en el boton ver del componente
   * @param event variable con el valor 'see'
   */
  clickSeeButton(event: string) {
    console.log(event);
  }

  /**
   * Emite cuando se da click en el boton editar del componente
   * @param event variable con el valor 'edit'
   */
  clickEdit(event) {
    console.log(event);
  }

  /**
   * Método recibe el valor escrito en el input
   * @param value cadena de caracteres
   */
  changeValueInput(value: string) {
    this.titleInput = value;
  }
}
