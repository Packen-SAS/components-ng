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
  imgRoute = 'https://packenco.s3.amazonaws.com/packen_ng/packen_file/right-arrow.svg';

  constructor() { }

  ngOnInit(): void {
  }

  disable() {
    this.disabledFile = !this.disabledFile;
  }

  printFiles() {
    console.log('File 1: ', this.selectedFile);
    console.log('File 2: ', this.selectedFile2);
  }
}
