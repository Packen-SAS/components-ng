import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  constructor() { }
  showAlert: boolean = true;

  ngOnInit(): void {
  }

  /**
   * Metodo funciona cuando se da click en el componente alert
   * @param event variable con el valor 'close'
   */
  closeAlert(event: string) {
    console.log(event);
  }
}
