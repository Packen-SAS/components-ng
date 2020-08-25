import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  activeTabId: number = 2;

  tabs = [{
    label: 'Label 1',
    id: 1,
  },
  {
    label: 'Label 2',
    id: 2,
  },
  {
    label: 'Label 3',
    id: 3,
  }];

  constructor() { }

  ngOnInit(): void {
  }

  changeTab = (idTab) => {
    this.activeTabId = idTab;
  }

}
