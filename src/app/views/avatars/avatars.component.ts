import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.scss']
})
export class AvatarsComponent implements OnInit {
  imageFile:any = null;
  constructor() { }

  ngOnInit(): void {
    
  }

  clickComponent = () =>{
    alert("acción emitida");
  }

}
