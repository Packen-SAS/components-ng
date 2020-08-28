import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  selectedFile: File;
  selectedFile2: File;
  disabledFile: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  disable() {
    this.disabledFile = !this.disabledFile;
    console.log('File 1: ', this.selectedFile);
    console.log('File 2: ', this.selectedFile2);
  }

  printFiles() {
    console.log('File 1: ', this.selectedFile);
    console.log('File 2: ', this.selectedFile2);
  }
}
