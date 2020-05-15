import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-packen-avatar',
  templateUrl: './packen-avatar.component.html',
  styleUrls: ['./packen-avatar.component.scss']
})
export class PackenAvatarComponent implements OnInit {
  @Input() size: any = null;
  @Input() src: any = null;
  @Output() outputClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  defineSizeImage = (sizesImages: SizesImages): number => {
    switch (sizesImages) {
      case 'tiny':
        return PackenAvatarSizes.tiny;
      case 'small':
        return PackenAvatarSizes.small;
      case 'medium':
        return PackenAvatarSizes.medium;
      case 'large':
        return PackenAvatarSizes.large;
      case 'xlarge':
        return PackenAvatarSizes.xlarge;
      default:
        return PackenAvatarSizes.tiny;
    }
  }

  clickImage = (): void => {
    this.outputClick.emit();

  }
}

class PackenAvatarSizes {
  static readonly tiny: number = 32;
  static readonly small: number = 40;
  static readonly medium: number = 64;
  static readonly large: number = 80;
  static readonly xlarge: number = 96;
}

type SizesImages = 'tiny' | 'small' | 'medium' | 'large' | 'xlarge';

