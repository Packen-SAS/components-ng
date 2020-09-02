import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {

  dateToday: Date = new Date();
  dateSelected: Date;
  disabledDate: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  disable() {
    this.disabledDate = !this.disabledDate;
  }

  printDate() {
    console.log('Date: ', this.dateSelected);
  }
}
