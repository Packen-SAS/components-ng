import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.scss']
})
export class AvatarsComponent implements OnInit {

  imageFileTiny: any = null;
  imageFileMedium: any = null;

  constructor() { }

  ngOnInit(): void {
  }

  printFile() {
    console.log('Tiny avatar: ', this.imageFileTiny);
    console.log('Medium avatar: ', this.imageFileMedium);
  }

}
