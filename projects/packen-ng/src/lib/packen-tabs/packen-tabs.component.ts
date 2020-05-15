import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-packen-tabs',
  templateUrl: './packen-tabs.component.html',
  styleUrls: ['./packen-tabs.component.scss']
})
export class PackenTabsComponent implements OnInit {
  @Input() tabs: any = [];
  @Input() activeTabId: any = 0;
  @Output() outputClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  clickTab = (tabId) => {
    this.outputClick.emit(tabId);
  }

}
