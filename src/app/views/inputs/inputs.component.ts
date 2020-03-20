import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {
  valueTest = "Value test";
  constructor() { }


  ngOnInit(): void {
  }

  changeTextInput = (data) => {
    this.valueTest = data;
  }

}
