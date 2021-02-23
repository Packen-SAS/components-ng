import { Component } from '@angular/core';
import { DropdownItem } from 'dist/packen-ng/interfaces/dropdown-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedMenu2: number = 1;
  itemsMenu2: Array<DropdownItem> = [
    {
      id: 1,
      left: {
        type: 'avatar',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/1024px-Missing_avatar.svg.png'
      },
      disabled: false,
      title: 'Title 1',
    },
    {
      id: 2,
      left: {
        type: 'avatar',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/1024px-Missing_avatar.svg.png'
      },
      disabled: true,
      title: 'Title 2',
    },
    {
      id: 3,
      left: {
        type: 'avatar',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/1024px-Missing_avatar.svg.png'
      },
      disabled: false,
      title: 'Title 3',
    }
  ];


}
