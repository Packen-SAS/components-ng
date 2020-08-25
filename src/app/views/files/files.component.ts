import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  selectedFile: File;
  disabledFile: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  printFile() {
    console.log(this.selectedFile);
  }

  disable() {
    this.disabledFile = !this.disabledFile;
  }
}
