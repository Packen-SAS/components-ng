import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-packen-divider',
  templateUrl: './packen-divider.component.html',
  styleUrls: ['./packen-divider.component.scss']
})
export class PackenDividerComponent implements OnInit {
  @Input() type: any = null;
  @Input() marginTop: any = 0;
  @Input() marginBottom: any = 0;
  constructor() { }

  ngOnInit(): void {
  }

  getHeight = (type: TypeDivider): number => {
    switch (type) {
      case 'dark':
        return PackenHeightDivider.dark;
      case 'light':
        return PackenHeightDivider.light;
      default:
        return PackenHeightDivider.light;
    }
  }

  getClassColorDivider = (type: TypeDivider): string => {
    switch (type) {
      case 'dark':
        return PackenClassColorDivider.dark;
      case 'light':
        return PackenClassColorDivider.light;
      default:
        return PackenClassColorDivider.light;
    }
  }
}
class PackenHeightDivider {
  static readonly light: number = 1;
  static readonly dark: number = 2;
}

class PackenClassColorDivider {
  static readonly light: string = 'light';
  static readonly dark: string = 'dark';
}

type TypeDivider = 'light' | 'dark';